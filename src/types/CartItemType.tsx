export interface CartItemType {
    event: {
        id: string;
        title: string;
        startDate: string;
        startTime: string;
    };
    ticketType: string,
    price: number,
    quantity: number,
    subTotal: number,
};