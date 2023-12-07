import { Container } from '@mui/material';
import EventList from '../containers/events/EventList';

const HomePage = () => {
    return (
        <Container disableGutters>
            <EventList />
        </Container>
    );
};

export default HomePage;