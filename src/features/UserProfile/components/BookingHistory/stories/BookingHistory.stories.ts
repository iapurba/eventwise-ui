import { Meta, StoryObj } from '@storybook/react';
import BookingHistory from '../BookingHistory';

const meta = {  
    title: 'User Profile/Booking History',
    component: BookingHistory,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BookingHistory>;

export default meta;

type Stroy = StoryObj<typeof meta>;

export const Bookings:Stroy = {

};