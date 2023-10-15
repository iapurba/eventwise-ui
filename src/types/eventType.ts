export interface Event {
    _id: string;
    title: string;
    description: string;
    category: string;
    eventType: string;
    location: {
        venue: string;
        address: {
            street: string;
            city: string;
            state: string;
            pincode: string;
        };
    };
    date: Date;
    startTime: string;
    duration: string;
    capacity: number;
    artists: string[];
    tags: string[];
    createdBy: string,
    performances: string[]
}