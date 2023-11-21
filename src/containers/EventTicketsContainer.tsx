import { Container } from '@mui/material';
import ShowTicket from '../components/ticket/ShowTicket';
import { useGetTicketsByEventIdQuery } from '../services/ticketApi';

interface EventTicketsContainerProps {
    eventId: string,
};

const EventTicketsContainer: React.FC<EventTicketsContainerProps> = ({ eventId }) => {
    
    const showTicketsQuery = useGetTicketsByEventIdQuery(eventId);
    const { data: tickets, isLoading } = showTicketsQuery;
    console.log(tickets);

    return (
        isLoading
            ? <>Loading ...</>
            : <Container>
                {
                    tickets && tickets.map((ticket: any) => (
                        <ShowTicket
                            key={ticket.id}
                            ticketType={ticket?.ticketType}
                            description={ticket?.extraInfo}
                            price={ticket?.price}
                            maxOrderQty={ticket?.maxTicketsPerOrder}
                            isAvailable={ticket?.isAvailable}
                        />
                    ))
                }
            </Container>
    );
};

export default EventTicketsContainer;