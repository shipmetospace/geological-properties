import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cookies from 'js-cookie';
import { RouterProvider, createMemoryRouter } from 'react-router';

import { AppProvider } from '@/app/provider';

import {
  createDiscussion as generateDiscussion,
  createUser as generateUser,
} from './data-generators';
import { db } from './mocks/db';
import { AUTH_COOKIE, authenticate, hash } from './mocks/utils';

type GeneratedUser = ReturnType<typeof generateUser>;
export const createUser = async (userProperties?: Partial<GeneratedUser>) => {
  const user = generateUser(userProperties);
  await db.user.create({ ...user, password: hash(user.password) } as any);
  return user;
};

type GeneratedDiscussion = ReturnType<typeof generateDiscussion>;
export const createDiscussion = async (
  discussionProperties?: Partial<GeneratedDiscussion>,
) => {
  const discussion = generateDiscussion(discussionProperties);
  const res = await db.discussion.create(discussion as any);
  return res;
};

export const loginAsUser = async (user: {
  email: string;
  password: string;
}) => {
  const authUser = await authenticate(user);
  Cookies.set(AUTH_COOKIE, authUser.jwt);
  return authUser;
};

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [
      ...screen.queryAllByTestId(/loading/i),
      ...screen.queryAllByText(/loading/i),
    ],
    { timeout: 4000 },
  );

const initializeUser = async (
  user: GeneratedUser | null | undefined,
) => {
  if (typeof user === 'undefined') {
    const newUser = await createUser();
    return loginAsUser(newUser);
  } else if (user) {
    return loginAsUser(user);
  } else {
    return null;
  }
};

export const renderApp = async (
  ui: React.ReactElement,
  {
    user,
    url = '/',
    path = '/',
    ...renderOptions
  }: {
    user?: GeneratedUser | null;
    url?: string | null;
    path?: string;
    [key: string]: unknown;
  } = {},
) => {
  // if you want to render the app unauthenticated then pass "null" as the user
  const initializedUser = await initializeUser(user);

  const router = createMemoryRouter(
    [
      {
        path: path,
        element: ui,
      },
    ],
    {
      initialEntries: url ? ['/', url] : ['/'],
      initialIndex: url ? 1 : 0,
    },
  );

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: () => {
        return (
          <AppProvider>
            <RouterProvider router={router} />
          </AppProvider>
        );
      },
      ...renderOptions,
    }),
    user: initializedUser,
  };

  await waitForLoadingToFinish();

  return returnValue;
};

export * from '@testing-library/react';
export { userEvent, rtlRender };
