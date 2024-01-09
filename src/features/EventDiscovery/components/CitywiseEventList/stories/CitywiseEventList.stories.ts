import {StoryObj, Meta} from '@storybook/react';
import CitywiseEventList from '../CitywiseEventList';
import { CITYWISE_EVENT_MOCK } from '../CitywiseEventList.mockdata';

const meta = {
    title: 'Events in City',
    component: CitywiseEventList,
    args: {
        events: CITYWISE_EVENT_MOCK
    }
} satisfies Meta<typeof CitywiseEventList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllEventsInACity: Story = {
    args: {
        events: CITYWISE_EVENT_MOCK
    }
}   