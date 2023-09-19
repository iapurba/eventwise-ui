import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEventById } from '../redux/actions/eventActions';
import { Container } from '@mui/material';
import EventDetailsContainer from '../containers/EventDetailsContainer';

const EventDetails = () => {
    const dispatch = useDispatch<any>();

    useEffect(() => {
        const event = dispatch(fetchEventById('64f746627f95cd45e4261f43'));
        console.log(event);
    }, [dispatch]);

    return (
        <Container disableGutters>
            <EventDetailsContainer/>
        </Container>
    );
};

export default EventDetails;