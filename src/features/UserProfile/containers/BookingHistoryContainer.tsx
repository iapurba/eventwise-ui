import Container from '@mui/material/Container';
import BookingHistory from '../components/BookingHistory/BookingHistory';

const customStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
};

const BookingHistoryContainer: React.FC = () => {
    return (
        <Container
            sx={customStyles}
            className='booking-history-container'
        >
            <BookingHistory />
        </Container>
    );
};

export default BookingHistoryContainer;