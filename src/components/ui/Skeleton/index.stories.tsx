import { Skeleton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: 'w-32 h-32',
  },
};

export const Circle: Story = {
  args: {
    className: 'w-32 h-32 rounded-full',
  },
};
