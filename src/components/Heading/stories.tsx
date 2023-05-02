import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  render: (args) => <Heading {...args} />
};

Primary.args = {
  children: 'Most Populars'
};
