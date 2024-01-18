import { StoryObj, Meta } from '@storybook/react';
import EventDetails from '../EventDetails';

const meta = {
    title: 'Event Insight/Event Details',
    component: EventDetails,
} satisfies Meta<typeof EventDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PhysicalEventDetails: Story = {
    args: {
        name: 'This is an Physical Event',
        category: 'Category',
        venue: 'City Center II',
        city: 'Kolkata',
        eventType: 'physical',
        priceDisplatString: '₹500 Onwards',
        dateTimeString: 'Jan 22 | 4PM',
    }
};

export const OnlineEventDetails: Story = {
    args: {
        name: 'This is an Physical Event',
        category: 'Category',
        venue: 'City Center II',
        city: 'Kolkata',
        eventType: 'online',
        priceDisplatString: '₹500 Onwards',
        dateTimeString: 'Jan 22 | 4PM',
    }
};

