import Container from '@mui/material/Container';
import Booking from '../../components/tickets/Booking';

const containerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
};

const BookingHistory = () => {
    return (
        <Container style={containerStyle}>
            <Booking />
        </Container>
    );
};

export default BookingHistory;