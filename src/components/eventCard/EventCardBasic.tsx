import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const EventCardBasic = () => {
    const cardStyle = {
        boxShadow: 'none',
        border: '1px solid lightgray',
        borderRadius: '12px',
        padding: '12px'
    };

    return (
        <Card style={cardStyle}>
            <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                    <Typography
                        gutterBottom
                        component='div'
                        variant='h5'
                        sx={{ fontWeight: 'bold' }}
                    >
                        {'Shreya Ghoshal I All Hearts Tour I Kolkata'}
                    </Typography>
                    <Box display="flex" alignItems="center" p={2} border={1}>
                        <FavoriteBorderOutlinedIcon />
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <BookmarkBorderIcon />
                    <Typography variant="body1" ml={2}>Music</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <EventAvailableOutlinedIcon />
                    <Typography variant='body1' ml={2}>
                        {`December 2 | 6 PM`}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <LocationOnOutlinedIcon />
                    <Typography variant='body1' ml={2}>
                        {`Venue to be announced, Kolkata`}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Box display="flex" alignItems="center">
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold' }}
                    >
                        {'1999 Onwards'}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Button color='secondary' variant='contained'>
                            <Typography
                                variant='h6'
                                sx={{ fontWeight: 'bold' }}
                            >
                                {'BUY NOW'}
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
}

export default EventCardBasic;