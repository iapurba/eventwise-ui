import Grid from '@mui/material/Grid';
import PrimaryEventCard from '../components/event/PrimaryEventCard';
import { events } from '../mock/events';
import { useNavigate } from 'react-router-dom';

const EventListContainer = () => {
    const navigate = useNavigate();
    const handleEventClick = (eventId:string) => {
        navigate(`/events/${eventId}`)
    }
    
    return (
        <Grid container spacing={4} pt={3}>
            {events.map((event, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                    <div onClick={() => handleEventClick(event?._id)}>
                        <PrimaryEventCard event={event} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default EventListContainer;