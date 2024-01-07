import PageWrapper from '../components/common/wrappers/PageWrapper';
import EventDisplayContainer from '../features/event/containers/EventDisplayContainer';
import { useParams } from 'react-router-dom';

const EventPage = () => {
    const { slug } = useParams();
    return (
        <PageWrapper id='home-page'>
            <EventDisplayContainer slug={slug ? slug : ''} />
        </PageWrapper>

    );
};

export default EventPage;