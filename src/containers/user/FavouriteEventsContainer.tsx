import Container from '@mui/material/Container';
import FavouriteEventCard from '../../components/event/FavouriteEventCard';
import Grid from '@mui/material/Grid';

const FavouriteEventsContainer = () => {
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item sm={12} md={6}>
                    <FavouriteEventCard/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <FavouriteEventCard/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <FavouriteEventCard/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <FavouriteEventCard/>
                </Grid>
            </Grid>
        </Container>
        
    );
};

export default FavouriteEventsContainer;