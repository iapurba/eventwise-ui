import type { Meta, StoryObj } from '@storybook/react';
import TicketButton from '../TicketButton';


const meta = {
  title: 'Common/Button/Ticket Button',
  component: TicketButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TicketButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BuyBtn: Story = {
  args: {
    label: 'Buy',
  },
};

export const SoldOutBtn: Story = {
  args: {
    disabled: true,
    label: 'Sold out',
  },
};
