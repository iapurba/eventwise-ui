import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const EventCard = () => {
    return (
        <Card >
            <CardMedia
                sx={{ height: 220 }}
                image={`${process.env.PUBLIC_URL}/images/event-poster.png`}
                title="event poster"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    component='div'
                    variant='h6'
                    sx={{ fontWeight: 'bold' }}
                >
                    {'Trimurthi - Chapter ONE'}
                </Typography>
                <Typography variant='body1' gutterBottom>
                    October 15 | 11 AM Onwards
                </Typography>
                <Typography variant='body1'>Nazrul Mancha, Kolkata</Typography>
            </CardContent>
            <CardActions>
                <Button>BUY NOW</Button>
            </CardActions>
        </Card>
    );
};

export default EventCard;