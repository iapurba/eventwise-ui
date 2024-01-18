import { Meta, StoryObj } from '@storybook/react';
import EventOverview from '../EventOverview';

const meta = {
    title: 'Event Insight/ Event Overview',
    component: EventOverview,
} satisfies Meta<typeof EventOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EventOverviewComponent: Story = {
    args: {
        description: "<p>Get ready for an unforgettable musical journey as Darshan Raval, the heartthrob of Indian music, embarks on his much-anticipated nationwide tour - This extraordinary concert series promises to be a celebration of love, emotions, and the magic of Darshan Raval's soulful voice.</p><p>The tour kicks off in Surat and will traverse the length and breadth of India, bringing Darshan's chart-topping hits to fans across the country.</p>\n<p>Audiences can expect a visually stunning and immersive experience, with state-of-the-art stage production, lighting, and sound engineering to complement the musical extravaganza. Each concert is meticulously crafted to provide an intimate yet electrifying atmosphere, allowing fans to connect with Darshan Raval on a personal level.</p>",
        terms: [
            "Please carry a valid ID proof along with you.",
            "No refunds on purchased ticket are possible, even in case of any rescheduling.",
            "Security procedures, including frisking remain the right of the management.",
            "People in an inebriated state may not be allowed entry.",
            "Organizers hold the right to deny late entry to the event.",
            "Venue rules apply.",
        ],
        faqs: [
            {
                question: "Is there parking available?",
                answer: "Yes, there is ample parking space available.",
                _id: "6588709c35543d885ed456ab",
            },
            {
                question: "Can I bring my own food?",
                answer: "Outside food and beverages are not allowed.",
                _id: "6588709c35543d885ed456ac",
            },
        ],
    }
};