import Grid from '@mui/material/Grid';
import EventDetails from '../../components/event/EventDetails';
import EventOverview from '../../components/event/EventOverview';
import EventImage from '../../components/event/EventImage';
import { useGetEvent } from '../../features/event/eventQuery';
import { useNavigate } from 'react-router-dom';
import EventGuide from '../../components/event/EventGuide';

interface EventDisplayContainerProps {
    eventId: string;
};

const EventDisplayContainer: React.FC<EventDisplayContainerProps> = ({ eventId }) => {

    const { event, isLoading } = useGetEvent(eventId);
    const navigate = useNavigate();

    const handleBuyNowClick = () => {
        navigate(`/buy/events/${eventId}/tickets`)
    }

    return (
        <>
            {isLoading
                ? <div>Loading</div>
                : <Grid container spacing={4} mt={1}>
                    <Grid item sm={12} md={8}>
                        <EventImage imageUrl={`${process.env.PUBLIC_URL}/images/event-poster.png`} />
                        <EventOverview details={event?.details} />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Grid container direction={'column'}>
                            <Grid item>
                                <EventDetails event={event} onBuyClick={handleBuyNowClick} />
                            </Grid>
                            <Grid item>
                                <EventGuide
                                    ageRequirment={event?.eventGuide?.ageRequirment}
                                    languages={event?.eventGuide?.languages}
                                    livePerformance={event?.eventGuide?.livePerformance}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default EventDisplayContainer;