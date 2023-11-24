import Grid from '@mui/material/Grid';
import PrimaryEventCard from '../components/event/PrimaryEventCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetEventByLocationQuery } from '../services/apis/eventApi';
import { Key, useEffect } from 'react';
import Container from '@mui/material/Container';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const EventListContainer = () => {

    const navigate = useNavigate();
    const { city } = useParams();

    const { data, isLoading } = useGetEventByLocationQuery(city ?? skipToken);

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
                    {data && data.map((event: { id: string; }, index: Key | null | undefined) => (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                            <div onClick={() => handleEventClick(event?.id)}>
                                <PrimaryEventCard event={event} />
                            </div>
                        </Grid>
                    ))}
                </Grid>}
        </Container>

    );
};

export default EventListContainer;
