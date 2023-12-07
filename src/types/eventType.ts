export interface EventType {
    id: string;
    title: string;
    details: {
        description: string;
        imageGallery: [String],
        termsAndConditions: [String],
    }
    category: string;
    eventType: string;
    startingPrice: String,
    location: {
        venue: string;
        address: {
            street: string;
            city: string;
            state: string;
            pincode: string;
        };
    };
    startDate: string;
    startTime: string;
    endDate?: Date,
    duration?: string;
    artists: string[];
    tags: string[];
    createdBy: string,
    performances: string[]
}