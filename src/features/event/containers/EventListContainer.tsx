import Grid from '@mui/material/Grid';
import PrimaryEventCard from '../components/PrimaryEventCard';
import { useNavigate } from 'react-router-dom';
import { eventMockData } from '../../../mock/eventMockData';
import { Event } from '../types/event';


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
                        <PrimaryEventCard event={event} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default EventListContainer;
