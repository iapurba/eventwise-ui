import { Meta, StoryObj } from '@storybook/react';
import EventFilterPanel from '../EventFilterPanel';

const meta = {
    title: 'Event Discovery/Event Filter Panel',
    component: EventFilterPanel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EventFilterPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilterPanel: Story = {

};