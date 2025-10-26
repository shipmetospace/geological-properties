import { Meta, StoryObj } from '@storybook/react';

import { ProjectsList } from './projects-list';

const meta: Meta<typeof ProjectsList> = {
  component: ProjectsList,
};

export default meta;

type Story = StoryObj<typeof ProjectsList>;

export const Default: Story = {
  args: {}
};
