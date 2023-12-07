import Container from '@mui/material/Container';
import TicketsContainer from '../containers/tickets/TicketsContainer';
import { useParams } from 'react-router-dom';

const TicketsPage = () => {
    const { eventId } = useParams();

    return (
        <Container>
            <TicketsContainer eventId={eventId ? eventId : ''} />
        </Container>
    );
};

export default TicketsPage;