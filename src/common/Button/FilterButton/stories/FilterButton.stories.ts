import type { Meta, StoryObj } from '@storybook/react';
import FilterButton from '../FilterButton';

const meta = {
  title: 'Common/Button/Filter Button',
  component: FilterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RoundedActive: Story = {
  args: {
    label: 'Button',
    isActive: true,
  }
};

export const RoundedInactive: Story = {
  args: {
    label: 'Button',
    isActive: false,
  }
};
