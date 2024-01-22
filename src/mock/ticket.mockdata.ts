import { DiscountType, TicketType } from "../features/ticket/types/ticket";

const discount1: DiscountType = {
    code: 'DISCOUNT1',
    description: '10% Off',
    discountPercentage: 10,
    startDate: '2023-01-01',
    endDate: '2023-01-31',
    MaxUsageCount: 100,
};

const discount2: DiscountType = {
    code: 'DISCOUNT2',
    description: '20% Off',
    discountPercentage: 20,
    startDate: '2023-02-01',
    endDate: '2023-02-28',
    MaxUsageCount: 50,
};

export const ticketsMockData: TicketType[] = [
    {   
        _id: '12345',
        eventId: '1',
        ticketType: 'General Admission',
        price: 50,
        priceDisplayString: '₹50.00',
        description: 'Some Description',
        quantity: 100,
        maxOrderQty: 10,
        isAvailable: true,
        extraInfo: 'Includes access to the event',
        discount: discount1,
        seatingDetails: { section: 'A', seatNumber: '101' },
    },
    {
        _id: '12345',
        eventId: '1',
        ticketType: 'VIP',
        price: 100,
        priceDisplayString: '₹100.00',
        description: 'Some Description',
        quantity: 50,
        maxOrderQty: 5,
        isAvailable: true,
        extraInfo: 'Premium seating and amenities',
        discount: discount2,
        seatingDetails: { section: 'B', seatNumber: '202' },
    },
    {
        _id: '12345',
        eventId: '2',
        ticketType: 'Early Bird',
        description: 'Some Description',
        price: 40,
        priceDisplayString: '₹40.00',
        isAvailable: true,
        quantity: 200,
        maxOrderQty: 8,
    },
    {   
        _id: '12345',
        eventId: '2',
        ticketType: 'Group Discount',
        price: 150,
        priceDisplayString: '₹150.00',
        description: 'Some Description',
        quantity: 20,
        maxOrderQty: 4,
        isAvailable: false,
        discount: discount1,
    }
];