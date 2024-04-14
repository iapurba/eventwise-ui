import { Meta, StoryObj } from '@storybook/react';
import EventBasicInfo from '../EventBasicInfo';

const meta = {
    title: 'Event Tickets/EventBasicInfo',
    component: EventBasicInfo,
    parameters: {
        layout: 'centered'
    },
    args: {}
} satisfies Meta<typeof EventBasicInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EventInfo: Story = {
    args: {
        name: 'Kolkata Music Fest',
        dateTimeDisplayString: "February 10 | 7PM - February 12 | 10:30PM",
        locationDisplayString: "Cityville Music Arena, Kolkata",
    }
};