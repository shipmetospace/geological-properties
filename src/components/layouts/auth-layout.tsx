import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import logo from '@/assets/logo.svg';
import signIn from '@/assets/sign-in.svg';
import signInDark from '@/assets/sign-in-dark.svg';
import { Head } from '@/components/seo';
import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({ children, title }: LayoutProps) => {
  const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const navigate = useNavigate();

  useEffect(() => {
    if (user.data) {
      navigate(redirectTo ? redirectTo : paths.app.dashboard.getHref(), {
        replace: true,
      });
    }
  }, [user.data, navigate, redirectTo]);

  return (
    <>
      <Head title={title} />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto grid h-screen max-w-7xl px-4 py-8 lg:grid-cols-12 lg:gap-20 lg:py-16">
          <div className="w-full place-self-center lg:col-span-6">
            <div className="mx-auto max-w-lg rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
              <Link
                className="mb-4 inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white sm:mb-6 w-full place-self-center hover:text-blue-500"
                to={paths.home.getHref()}
              >
                <img
                  className="mr-2 h-8 w-auto justify-center"
                  src={logo}
                  alt="logo"
                />
                Geological Properties
              </Link>
              {children}
            </div>
          </div>
          <div className="mr-auto hidden place-self-center lg:col-span-6 lg:flex">
            <img
              className="mx-auto dark:hidden"
              src={signIn}
              alt="illustration"
            />
            <img
              className="mx-auto hidden dark:flex"
              src={signInDark}
              alt="illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};
