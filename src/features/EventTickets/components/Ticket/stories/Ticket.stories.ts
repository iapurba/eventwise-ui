import { Meta, StoryObj } from '@storybook/react';
import Ticket from '../Ticket';

const meta = {
    title: 'Event Tickets/Ticket',
    component: Ticket,
} satisfies Meta<typeof Ticket>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Ticket1: Story = {
    args:{
        ticketDetails: {
            ticketType: "Platinum",
            description: 'Premium seating and amenities',
            price: 500,
            priceDisplayString: '₹500.00',
            maxOrderQty: 5,
            isAvailable: true,
            extraInfo: 'Fast filling',
        },
    }
}