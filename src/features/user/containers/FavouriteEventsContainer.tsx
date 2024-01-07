import Container from '@mui/material/Container';
import FavouriteEventList from '../../event/components/FavouriteEventList';

const dummyData = [
    {
        title: 'This is a Favourite Event because user liked it',
        dateTimeStr: 'December 31 | 8PM',
        priceStr: '1000 Onwards'
    },
    {
        title: 'This is a Favourite Event because user liked it',
        dateTimeStr: 'December 31 | 8PM',
        priceStr: '1000 Onwards'
    },
    {
        title: 'This is a Favourite Event because user liked it',
        dateTimeStr: 'December 31 | 8PM',
        priceStr: '1000 Onwards'
    }
];

const FavouriteEventsContainer = () => {
    return (
        <Container>
            <FavouriteEventList eventList={dummyData} />
        </Container>
        
    );
};

export default FavouriteEventsContainer;