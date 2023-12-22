import { Input } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'The type of the input',
      defaultValue: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    disabled: true,
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

export const Date: Story = {
  args: {
    type: 'date',
  },
};

export const Time: Story = {
  args: {
    type: 'time',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};
