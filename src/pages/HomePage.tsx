import EventListContainer from '../features/EventDiscovery/containers/EventListContainer';
import PageWrapper from '../components/common/wrappers/PageWrapper';
import EventFilterPanel from '../features/EventDiscovery/components/EventFilterPanel/EventFilterPanel';

const HomePage = () => {
    return (
        <PageWrapper id='home-page'>
            <EventFilterPanel/>
            <EventListContainer />
        </PageWrapper>
    );
};

export default HomePage;