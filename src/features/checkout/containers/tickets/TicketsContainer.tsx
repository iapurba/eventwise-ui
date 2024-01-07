import Box from '@mui/material/Box';
import EventBasicInfo from '../../../event/components/EventBasicInfo';
import { CartItem, addToCart } from '../../../booking/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { eventMockData } from '../../../../mock/eventMockData';
import { useEffect, useState } from 'react';
import { Event } from '../../../event/types/event';
import { Typography } from '@mui/material';
import { ticketsMockData } from '../../../../mock/ticketMockData';
import { TicketType } from '../../../ticket/types/ticket';
import TicketList from '../../components/tickets/TicketList';

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
        console.log({tickets});
        setEvent(eventMockData[0]);
    }, [tickets]);

    const handleBuyClickParent = (ticketData: CartItem) => {
        console.log('handle buy click parent');
        dispatch(addToCart(ticketData));
        navigate('/buy/checkout');
    };

    return (<>
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
                {
                    `Sorry! No slots/tickets are currently available 
                    to book for ${event?.name.toUpperCase()}. Please 
                    check back later.`
                }
            </Typography>}
    </>);
};

export default TicketsContainer;

// You already have some tickets from other events in your cart. Please review your order summary before proceeding.