import Container from '@mui/material/Container';
import BookedTicket from '../components/ticket/BookedTicket';

const containerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
};

const BookedTicketsContainer = () => {
    return (
        <Container style={containerStyle}>
            <BookedTicket/>
        </Container>
    );
};

export default BookedTicketsContainer;