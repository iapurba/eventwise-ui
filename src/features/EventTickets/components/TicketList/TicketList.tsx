import Ticket from "../Ticket/Ticket";

interface TicketItem {
    ticketType: string;
    description: string;
    price: number;
    maxOrderQty: number;
    isAvailable: boolean;
    extraInfo?: string;
}

interface TicketListProps {
    tickets: TicketItem[];
    onQtyChange: () => void;
    onBuyClick: (ticketData: any) => void;

}

const TicketList: React.FC<TicketListProps> = ({
    tickets,
    onQtyChange,
    onBuyClick,
}) => {
    return (<>
        {tickets && tickets.map((ticket, i) => (
            <Ticket
                key={i}
                ticketDetails={{
                    ticketType: ticket?.ticketType,
                    extraInfo: ticket?.extraInfo,
                    price: ticket?.price,
                    description: ticket?.description,
                    maxOrderQty: ticket?.maxOrderQty,
                    isAvailable: ticket?.isAvailable,
                }}
                onQunatityChange={() => ({})}
                onBuyClick={onBuyClick}
            />
        ))}
    </>);
};

export default TicketList;