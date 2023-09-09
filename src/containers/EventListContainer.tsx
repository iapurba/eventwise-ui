import Grid from '@mui/material/Grid';
import EventCard from '../components/eventCard/EventCard';

const EventListContainer = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={4}>
                <EventCard />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <EventCard />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <EventCard />
            </Grid>
        </Grid>
    );
};

export default EventListContainer;