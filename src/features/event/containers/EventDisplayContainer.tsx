import Grid from '@mui/material/Grid';
// import EventDetails from '../components/EventDetails';
// import { useGetEventBySlug } from '../../features/event/eventQuery';
import { useNavigate } from 'react-router-dom';
import { eventMockData } from '../../../mock/event.mockdata';
import EventDetails from '../../EventInsights/components/EventDetails/EventDetails';
import EventGuide from '../../EventInsights/components/EventGuide/EventGuide';
import EventPoster from '../../EventInsights/components/EventPoster/EventPoster';
import EventOverview from '../../EventInsights/components/EventOverview/EventOverview';

interface EventDisplayContainerProps {
    slug: string;
}

const EventDisplayContainer: React.FC<EventDisplayContainerProps> = ({ slug }) => {

    // const { event, isLoading } = useGetEventBySlug(slug);
    const event = eventMockData[0];
    const navigate = useNavigate();

    const handleBuyNowClick = () => {
        console.log({slug})
        navigate(`/event/${slug}/buy/${event._id}/tickets`)
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item sm={12} md={8}>
                    <EventPoster imageUrl={`${process.env.PUBLIC_URL}/images/event-poster.png`} />
                    <EventOverview
                        description={event?.description}
                        terms={event?.terms}
                        faqs={event?.faqs}
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    <Grid container direction={'column'}>
                        <Grid item>
                            <EventDetails
                                name={event?.name}
                                category={event?.category}
                                dateTimeString={event?.dateTimeString}
                                venue={event?.venue.name}
                                city={event?.city}
                                eventType={event?.eventType}
                                priceDisplatString={event?.priceDisplayString}
                                onBuyClick={handleBuyNowClick}
                            />
                        </Grid>
                        <Grid item>
                            <EventGuide extraInfo={event?.extraInfo} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
};

export default EventDisplayContainer;