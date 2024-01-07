import EventListContainer from '../features/event/containers/EventListContainer';
import EventFilterPanel from '../features/event/components/EventFilterPanel';
import PageWrapper from '../components/common/wrappers/PageWrapper';

const HomePage = () => {
    return (
        <PageWrapper id='home-page'>
            <EventFilterPanel/>
            <EventListContainer />
        </PageWrapper>
    );
};

export default HomePage;