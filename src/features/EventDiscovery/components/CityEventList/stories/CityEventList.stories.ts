import { StoryObj, Meta } from '@storybook/react';

import CityEventList from '../CityEventList';

const meta = {
    title: 'CityEventList',
    component: CityEventList,
    args: {},
} satisfies Meta<typeof CityEventList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllEventsInKolkata:Story = {
    args: {
        events: []
    }
};


