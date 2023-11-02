import { Tag } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tag> = {
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Link: Story = {
  args: {
    href: '/',
    children: 'Link',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const OutlineLink: Story = {
  args: {
    variant: 'outline',
    children: 'OutlineLink',
    href: '/',
  },
};

export const SecondaryLink: Story = {
  args: {
    variant: 'secondary',
    children: 'SecondaryLink',
    href: '/',
  },
};

export const DestructiveLink: Story = {
  args: {
    variant: 'destructive',
    children: 'DestructiveLink',
    href: '/',
  },
};
