import PageWrapper from '../components/common/wrappers/PageWrapper';
import TicketsContainer from '../features/EventTickets/containers/TicketsContainer';
import { useParams } from 'react-router-dom';

const TicketsPage = () => {
    const { eventId } = useParams();

    return (
        <PageWrapper id='ticket-page'>
            <TicketsContainer eventId={eventId ? eventId : ''} />
        </PageWrapper>
    );
};

export default TicketsPage;