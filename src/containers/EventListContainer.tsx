import Grid from '@mui/material/Grid';
import PrimaryEventCard from '../components/event/PrimaryEventCard';
import { useNavigate } from 'react-router-dom';
import { useGetEventsQuery } from '../services/events';
import { useEffect } from 'react';
import Container from '@mui/material/Container';

const EventListContainer = () => {

    const navigate = useNavigate();

    const { data, isLoading } = useGetEventsQuery();

    useEffect(() => {
        console.log('event data: ', data)
    }, [data])

    const handleEventClick = (eventId: string) => {
        navigate(`/events/${eventId}`)
    }

    return (
        <Container>
            {isLoading
                ? <div>Loading</div>
                : <Grid container spacing={4} pt={3}>
                    {data && data.map((event, index) => (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                            <div onClick={() => handleEventClick(event?._id)}>
                                <PrimaryEventCard event={event} />
                            </div>
                        </Grid>
                    ))}
                </Grid>}
        </Container>

    );
};

export default EventListContainer;