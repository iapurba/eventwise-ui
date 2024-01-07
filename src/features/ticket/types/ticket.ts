export interface DiscountType {
    code: string;
    description: string;
    discountPercentage: number,
    startDate: string,
    endDate: string,
    MaxUsageCount: number,
};

export interface TicketType {
    _id: string;
    eventId: string;
    ticketType: string;
    price: number;
    priceDisplayString: string;
    description: string;
    quantity: number;
    maxOrderQty: number;
    extraInfo?: string;
    isAvailable: boolean;
    discount?: DiscountType;
    seatingDetails?: any;
};

export interface TicketApiResponse {
    result: string;
    data: TicketType[];
};