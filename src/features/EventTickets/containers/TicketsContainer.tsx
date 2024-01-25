import Box from '@mui/material/Box';
import EventBasicInfo from '../components/EventBasicInfo/EventBasicInfo';
import { CartItem, addToCart } from '../../checkout/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { eventMockData } from '../../../mock/event.mockdata';
import { useEffect, useState } from 'react';
import { Event } from '../../EventDiscovery/types/event.type';
import { Typography } from '@mui/material';
import { ticketsMockData } from '../../../mock/ticket.mockdata';
import { TicketType } from '../types/ticket.type';
import TicketList from '../components/TicketList/TicketList';

interface TicketsContainerProps {
    eventId: string,
};

const TicketsContainer: React.FC<TicketsContainerProps> = ({ eventId }) => {
    const [event, setEvent] = useState<Event>(eventMockData[0]);
    const [tickets, setTickets] = useState<TicketType[]>();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const ticketsData = ticketsMockData;
        setTickets(ticketsData);
        console.log({ tickets });
        setEvent(eventMockData[0]);
    }, [tickets]);

    const handleBuyClickParent = (ticketData: CartItem) => {
        console.log('handle buy click parent');
        dispatch(addToCart(ticketData));
        navigate('/buy/checkout');
    };

    return (
        <div className='tickets-container'>
            <EventBasicInfo
                name={event?.name}
                dateTimeDisplayString={event?.dateTimeString}
                locationDisplayString={event?.locationDisplayString}
            />
            {tickets && tickets.length
                ? <Box sx={{ margin: '20px 160px' }}>
                    <TicketList
                        tickets={tickets}
                        onQtyChange={() => { }}
                        onBuyClick={handleBuyClickParent}
                    />
                </Box>
                : <Typography>
                    {`Sorry! No slots/tickets are currently available 
                    to book for ${event?.name.toUpperCase()}. Please 
                    check back later.`}
                </Typography>}
        </div>
    );
};

export default TicketsContainer;

// You already have some tickets from other events in your cart. Please review your order summary before proceeding.