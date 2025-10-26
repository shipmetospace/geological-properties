import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Breadcrumb } from './breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story, { parameters }) => (
      <MemoryRouter
        initialEntries={[parameters.initialPath || '/app/projects']}
      >
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    initialPath: '/app/projects',
  },
};

export const ShortPath: Story = {
  parameters: {
    initialPath: '/app',
  },
};

export const LongPath: Story = {
  parameters: {
    initialPath: '/app/projects/123/details/settings/advanced',
  },
};

export const DiscussionPath: Story = {
  parameters: {
    initialPath: '/app/discussions/abc-123-def',
  },
};

export const UserProfile: Story = {
  parameters: {
    initialPath: '/app/profile',
  },
};
