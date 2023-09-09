import { Container } from '@mui/material';
import EventListContainer from '../containers/EventListContainer';

const HomePage = () => {
    return (
        <Container disableGutters>
            <EventListContainer />
        </Container>
    );
};

export default HomePage;