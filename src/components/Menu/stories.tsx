import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '.';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  render: (args) => <Menu {...args} />
};

Primary.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
};
