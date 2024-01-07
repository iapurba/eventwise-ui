import Grid from '@mui/material/Grid';
import EventDetails from '../components/EventDetails';
import EventOverview from '../components/EventOverview';
import EventImage from '../components/EventImage';
// import { useGetEventBySlug } from '../../features/event/eventQuery';
import { useNavigate } from 'react-router-dom';
import EventGuide from '../components/EventGuide';
import { eventMockData } from '../../../mock/eventMockData';

interface EventDisplayContainerProps {
    slug: string;
}

const EventDisplayContainer: React.FC<EventDisplayContainerProps> = ({ slug }) => {

    // const { event, isLoading } = useGetEventBySlug(slug);
    const event = eventMockData[0];
    const navigate = useNavigate();

    const handleBuyNowClick = () => {
        navigate(`/event/${slug}/buy/${event._id}/tickets`)
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item sm={12} md={8}>
                    <EventImage imageUrl={`${process.env.PUBLIC_URL}/images/event-poster.png`} />
                    <EventOverview
                        description={event?.description}
                        terms={event?.terms}
                        safetyMesures={event?.safetyMesures}
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
                                venue={event?.venue}
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