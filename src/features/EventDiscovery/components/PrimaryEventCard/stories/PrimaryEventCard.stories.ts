import { StoryObj, Meta } from '@storybook/react';

import PrimaryEventCard from '../PrimaryEventCard';

const meta = {
    title: 'PrimaryEventCard',
    component: PrimaryEventCard,
    args: {

    }
} satisfies Meta<typeof PrimaryEventCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PhysicalEvent: Story = {
    args: {
        name: 'This is an Physical Event',
        dateTimeStr: 'Jan 22 | 4PM',
        eventType: 'physical',
        venue: 'City Center II',
        city: 'Kolkata',
        priceDisplayStr: '₹500 Onwards',
    }
};

export const OnlineEvent: Story = {
    args: {
        name: 'This is an Online Event',
        dateTimeStr: 'Jan 22 | 4PM',
        eventType: 'online',
        venue: 'City Center II',
        city: 'Kolkata',
        priceDisplayStr: 'Free',
    }
};