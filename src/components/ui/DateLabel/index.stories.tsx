import { DateLabel } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateLabel> = {
  component: DateLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DateLabel>;

export const Default: Story = {
  args: {
    date: '2023-01-01T00:00:00',
  },
};

export const FullDate: Story = {
  args: {
    date: '2023-01-01T00:00:00',
    format: 'yyyy/MM/dd',
  },
};

export const Date: Story = {
  args: {
    date: '2023-01-01T00:00:00',
    format: 'MM/dd',
  },
};
