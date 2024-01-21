import Container from '@mui/material/Container';
import FavouriteEventList from '../components/FavouriteEvents/FavouriteEventList';
import { eventMockData } from '../../../mock/event.mockdata';

const FavouriteEventsContainer: React.FC = () => {
    return (
        <Container className='favourite-events-container'>
            <FavouriteEventList eventList={eventMockData} />
        </Container>
        
    );
};

export default FavouriteEventsContainer;