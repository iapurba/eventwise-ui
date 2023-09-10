import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const EventCard = ({ event }: any) => {
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
                    {event?.title}
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {`${event?.date} | ${event?.time} Onwards`}
                </Typography>
                <Typography variant='body1'>
                    {`${event?.location?.venue}, ${event?.location?.address?.city}`}
                </Typography>
            </CardContent>           
            <CardActions>
                <Button>BUY NOW</Button>
            </CardActions>
        </Card>
    );
};

export default EventCard;