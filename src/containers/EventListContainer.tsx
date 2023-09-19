import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import EventCard from '../components/eventCard/EventCardLandscape';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/actions/eventsActions';
import { RootState } from '../redux/rootState';
import { useNavigate } from 'react-router-dom';
import { fetchEventById } from '../redux/actions/eventActions';

const EventListContainer = () => {
    const dispatch = useDispatch<any>();
    const eventList = useSelector((state: RootState) => state.events.events);
    const navigate = useNavigate();

    const [hasFetchedEvents, setHasFetchedEvents] = useState<boolean>(false);

    useEffect(() => {
        if (!hasFetchedEvents) {
            dispatch(fetchEvents());
            setHasFetchedEvents(true);
        }
    }, [dispatch, hasFetchedEvents]);

    const handleEventClick = async (eventId: string) => {
        navigate(`/events/${eventId}`);
        const event = await dispatch(fetchEventById(eventId))
        console.log(event);
    }

    return (
        <Grid container spacing={4}>
            {eventList.map((event, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                    <div onClick={() => handleEventClick(event._id)}>
                        <EventCard event={event} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default EventListContainer;