import { Container } from '@mui/material';
import EventDetailsContainer from '../containers/EventDetailsContainer';

const EventPage = () => {
    return (
        <Container disableGutters>
            <EventDetailsContainer/>
        </Container>
    );
};

export default EventPage;