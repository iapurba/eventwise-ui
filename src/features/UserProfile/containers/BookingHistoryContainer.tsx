import Box from '@mui/material/Box';
import BookingHistory from '../components/BookingHistory/BookingHistory';

const customStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
};

const BookingHistoryContainer: React.FC = () => {
    return (
        <Box
            sx={customStyles}
            className='booking-history-container'
        >
            <BookingHistory />
        </Box>
    );
};

export default BookingHistoryContainer;