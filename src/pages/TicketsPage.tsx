import TicketsContainer from '../features/EventTickets/containers/TicketsContainer';
import { useParams } from 'react-router-dom';
import PageBuilder from './PageBuilder/PageBuilder';

const TicketsPage = () => {
    const { eventId } = useParams();

    return (
        <PageBuilder id='ticket-page'>
            <TicketsContainer eventId={eventId ? eventId : ''} />
        </PageBuilder>
    );
};

export default TicketsPage;