import Image from 'next/image';

import { FullScreen } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FullScreen> = {
  component: FullScreen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FullScreen>;

export const Default: Story = {
  render: () => (
    <div className="w-96 h-96">
      <FullScreen>
        <Image
          src="https://avatars.githubusercontent.com/u/94045195?v=4"
          alt="icon"
          fill
          objectFit="contain"
        />
      </FullScreen>
    </div>
  ),
};
