import { Container } from '@mui/material';
import TicketBlock from '../components/ticket/TicketBlock';

const EventTicketsContainer = () => {
    return (
        <Container>
            <TicketBlock
                ticketType="General Admission"
                description="Access to all event areas"
                price={500}
                available={200}
            />
            <TicketBlock
                ticketType="Early Bird"
                description="Access to all event areas"
                price={1000}
                available={40}
            />
            <TicketBlock
                ticketType="VIP Pass"
                description="VIP lounge access, priority seating, and more"
                price={2000}
                available={0}
            />
            {/* Add more TicketBlocks as needed */}
        </Container>
    );
};

export default EventTicketsContainer;