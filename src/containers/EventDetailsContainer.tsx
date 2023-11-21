import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextOnlyEventCard from '../components/event/TextOnlyEventCard';
import EventAboutInfo from '../components/event/EventAboutInfo';
import { useGetEventByIdQuery } from '../services/eventApi';


const EventDetailsContainer = () => {

    const { eventId } = useParams();
    const { data, isLoading } = useGetEventByIdQuery(eventId ?? skipToken);

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            {isLoading
                ? <div>Loading</div>
                : <Grid container spacing={4} pt={3}>
                    <Grid item md={8}>
                        <Card>
                            <CardMedia
                                sx={{ height: 480 }}
                                image={`${process.env.PUBLIC_URL}/images/event-poster.jpg`}
                            />
                        </Card>
                        <EventAboutInfo description={data?.details?.description} />
                    </Grid>
                    <Grid item md={4} container>
                        <Grid item md={12}>
                            <TextOnlyEventCard event={data} />
                        </Grid>
                    </Grid>
                </Grid>
            }
        </>

    );
};

export default EventDetailsContainer;