import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextOnlyEventCard from '../components/event/TextOnlyEventCard';
import EventAboutInfo from '../components/event/EventAboutInfo';
import { events } from '../mock/events';


const EventDetailsContainer = () => {
    const event = events[1]
    return (
        <Grid container spacing={4} pt={3}>
            <Grid item md={8}>
                <Card>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={`${process.env.PUBLIC_URL}/images/event-poster.jpg`}
                    />
                </Card>
                <EventAboutInfo description={event?.description} />
            </Grid>
            <Grid item md={4} container>
                <Grid item md={12}><TextOnlyEventCard event={event} /></Grid>
            </Grid>
        </Grid>
    );
};

export default EventDetailsContainer;