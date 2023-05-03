import type { Meta, StoryObj } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: undefined
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args} />
};

Primary.args = {
  children: 'Buy now'
};

export const withIcon: Story = {
  render: (args) => <Button {...args} />
};

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
};

export const asLink: Story = {
  render: (args) => <Button {...args} />
};

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
};
