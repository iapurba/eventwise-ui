import Box from '@mui/material/Box';
import Ticket from '../../components/tickets/Ticket';
import { useGetEventTickets } from '../../features/ticket/ticketQuery';
import { useGetEvent } from '../../features/event/eventQuery';
import EventBasicInfo from '../../components/event/EventBasicInfo';
import TicketType from '../../types/TicketType';
import { CartItem, addToCart } from '../../features/booking/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface TicketsContainerProps {
    eventId: string,
};

const TicketsContainer: React.FC<TicketsContainerProps> = ({ eventId }) => {

    // API calls with RTK query 
    const { event, isLoading: isEventLoading } = useGetEvent(eventId);
    const { tickets, isLoading: isTicketLoading } = useGetEventTickets(eventId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBuyClickParent = (ticketData: CartItem) => {
        console.log('handle buy click parent');
        dispatch(addToCart(ticketData));
        navigate('/buy/checkout');
    };

    return (
        (isEventLoading || isTicketLoading)
            ? <div>Loading</div>
            : <>
                <EventBasicInfo event={event} />
                <Box sx={{ margin: '0 160px' }}>
                    {tickets && tickets.map((ticket: TicketType) => (
                        <Ticket
                            key={ticket.id}
                            ticketDetails={{
                                event: event,
                                ticketType: ticket?.ticketType,
                                description: ticket?.extraInfo,
                                price: ticket?.price,
                                maxOrderQty: ticket?.maxTicketsPerOrder,
                                isAvailable: ticket?.isAvailable,
                            }}
                            onQunatityChange={() => ({})}
                            onBuyClick={handleBuyClickParent}
                        />
                    ))}
                </Box>
            </>
    );
};

export default TicketsContainer;

// You already have some tickets from other events in your cart. Please review your order summary before proceeding.