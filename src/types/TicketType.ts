interface TicketType {
    id: string;
    eventId: string;
    ticketType: string;
    description: string;
    price: number;
    maxTicketsPerOrder: number;
    extraInfo: string;
    isAvailable: boolean;
    priceDisplayString: string;
};

export default TicketType;