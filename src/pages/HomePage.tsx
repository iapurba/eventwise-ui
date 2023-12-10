import { Container } from '@mui/material';
import EventList from '../containers/events/EventList';
import EventFilterPanel from '../components/event/EventFilterPanel';

const HomePage = () => {
    return (
        <Container disableGutters>
            <EventFilterPanel/>
            <EventList />
        </Container>
    );
};

export default HomePage;