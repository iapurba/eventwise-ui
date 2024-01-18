import { StoryObj, Meta } from '@storybook/react';
import EventGuide from '../EventGuide';
import { ExtraInfo } from '../../../types/extraInfo.types';

const meta = {
    title: 'Event Insight/Event Guide',
    component: EventGuide,
} satisfies Meta<typeof EventGuide>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockExtraInfo: ExtraInfo[] = [
    {
        title: "For Age(s)",
        text: "All ages welcome",
        imageUrl: "https://example.com/family-zone.jpg",
        _id: "abcdef123456789",
    },
    {
        title: "Languages",
        text: "English, Spanish",
        imageUrl: "https://example.com/language-corner.jpg",
        _id: "fedcba987654321",
    },
    {
        title: "Live Performance",
        text: "Immerse yourself in live music",
        imageUrl: "https://example.com/live-performance.jpg",
        _id: "987654abcdef123",
    },
];

export const EventGuideInfo: Story = {
    args: {
        extraInfo: mockExtraInfo
    }
};

