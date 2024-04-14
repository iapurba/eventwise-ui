import EventDisplayContainer from '../features/EventInsights/containers/EventDisplayContainer';
import { useParams } from 'react-router-dom';
import PageBuilder from './PageBuilder/PageBuilder';

const EventPage = () => {
    const { slug } = useParams();
    return (
        <PageBuilder id='home-page'>
            <EventDisplayContainer slug={slug ? slug : ''} />
        </PageBuilder>

    );
};

export default EventPage;