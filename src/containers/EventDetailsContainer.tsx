import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Grid from   '@mui/material/Grid';
import EventCardBasic from '../components/eventCard/EventCardBasic';

const EventDetailsContainer = () => {
    return (
        <Grid container spacing={5}>
            <Grid item md={8}>
                <Card>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={`${process.env.PUBLIC_URL}/images/event-poster.jpg`}
                        title="event poster"
                    />
                </Card>
            </Grid>
            <Grid item md={4}>
                <EventCardBasic/>
            </Grid>
        </Grid>
    );
};

export default EventDetailsContainer;