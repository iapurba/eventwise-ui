import { Meta, StoryObj } from '@storybook/react';
import FavouriteEventList from '../FavouriteEventList';
import { eventMockData } from '../../../../../mock/event.mockdata';

const meta = {
    title: 'User Profile/FavouriteEventList',
    component: FavouriteEventList,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FavouriteEventList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Favourites: Story = {
    args: {
        eventList: eventMockData,
    },
};