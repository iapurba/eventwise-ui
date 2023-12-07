import { Container } from '@mui/material';
import EventDetails from '../containers/events/EventDisplayContainer';
import { useParams } from 'react-router-dom';

const EventPage = () => {
    const { eventId } = useParams();
    return (
        <Container disableGutters>
            <EventDetails eventId={eventId ? eventId : ''} />
        </Container>
    );
};

export default EventPage;