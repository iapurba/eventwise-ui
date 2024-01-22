import Grid from '@mui/material/Grid';
import PrimaryEventCard from '../components/PrimaryEventCard/PrimaryEventCard';
import { useNavigate } from 'react-router-dom';
import { eventMockData } from '../../../mock/event.mockdata';
import { Event } from '../types/event.type';


const EventListContainer: React.FC = () => {
    const events = eventMockData;

    const navigate = useNavigate();

    const handleEventClick = (slug: string) => {
        navigate(`/${slug}/event`)
    };

    return (
        <Grid container spacing={4} pt={3}>
            {events.map((event: Event, index: number) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                    <div onClick={() => handleEventClick(event?.slug)}>
                        <PrimaryEventCard 
                            name={event.name}
                            dateTimeStr={event.dateTimeString}
                            eventType={event.eventType}
                            venue={event.venue.name}
                            city={event.city}
                            priceDisplayStr={event.priceDisplayString}
                         />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default EventListContainer;
