import { GitHubLogoIcon } from '@radix-ui/react-icons'

import { IconButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <GitHubLogoIcon />,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: <GitHubLogoIcon />,
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: <GitHubLogoIcon />,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: <GitHubLogoIcon />,
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: <GitHubLogoIcon />,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: <GitHubLogoIcon />,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <GitHubLogoIcon />,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: <GitHubLogoIcon />,
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: <GitHubLogoIcon />,
  },
};