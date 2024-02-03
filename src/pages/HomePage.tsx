import EventFilterPanel from '../features/EventDiscovery/components/EventFilterPanel/EventFilterPanel';
import EventListContainer from '../features/EventDiscovery/containers/EventListContainer';
import PageBuilder from './PageBuilder/PageBuilder';

const HomePage = () => {
    return (
        <PageBuilder id='home-page'>
            <EventFilterPanel/>
            <EventListContainer />
        </PageBuilder>
    );
};

export default HomePage;