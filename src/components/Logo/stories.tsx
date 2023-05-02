import type { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoProps } from '.';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
  render: (args: LogoProps) => <Logo {...args} />
};
