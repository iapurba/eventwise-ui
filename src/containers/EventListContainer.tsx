import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import EventCard from '../components/eventCard/EventCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/actions/eventsActions';
import { RootState } from '../redux/rootState';

const EventListContainer = () => {
    const eventList = useSelector((state: RootState) => state.events.events);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        if (!eventList.length) {
            dispatch(fetchEvents());
        }
    }, [dispatch, eventList]);

    return (
        <Grid container spacing={4}>
            {eventList.map((event, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                    <EventCard event={event} />
                </Grid>
            ))}
        </Grid>
    );
};

export default EventListContainer;