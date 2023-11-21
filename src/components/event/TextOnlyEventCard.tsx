import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import StyledButton from '../common/StyledButton';
import {
    StyledBookmarkIcon,
    StyledEventIcon,
    StyledLocationIcon,
    StyledPlayCircleIcon
} from '../common/StyledIcons';
import StyledBox from '../common/StyledBox';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/dateTimeFormatter';


const StyledBoxCardAction = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    borderRadius: theme.shape.borderRadius,
    alignItems: 'center',
    width: '100%',
}));

const EventCardBasic = ({ event }: any) => {

    return (
        <StyledBox sx={{ borderColor: 'rgb(225, 227, 230)' }}>
            <CardContent>
                <Box
                    mb={1}
                    display="flex"
                    alignItems="center"
                    justifyContent={'space-between'}
                >
                    <Typography
                        gutterBottom
                        component='div'
                        variant='h5'
                        sx={{ fontWeight: 'bold' }}
                    >
                        {event?.title}
                    </Typography>
                    {/* <StyledBox>
                        <IconButton aria-label="delete" size="small">
                            <StyledFavouriteIcon fontSize="inherit" />
                        </IconButton>
                        <Typography variant='subtitle2' m={0} p={0} fontSize={'11px'}>50</Typography>
                    </StyledBox> */}
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <StyledBookmarkIcon />
                    <Typography variant="body1" ml={1}>{event?.category}</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <StyledEventIcon />
                    <Typography variant='body1' ml={1}>
                        {`${formatDate(event?.startDate)} | ${event?.startTime}`}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    {
                        event.eventType === 'physical' ? (
                            <>
                                <StyledLocationIcon />
                                <Typography variant='body1' ml={1}>
                                    {`${event.location.venue}, ${event.location.address.city}`}
                                </Typography>
                            </>
                        ) : (
                            <>
                                <StyledPlayCircleIcon />
                                <Typography variant='body1' ml={1}>Online</Typography>
                            </>
                        )}

                </Box>
            </CardContent>
            <CardActions>
                <StyledBoxCardAction>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold' }}
                    >
                        {event.startingPrice === 'Free' ? 'FREE' : `₹${event.startingPrice}`}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Link to={`/buy/events/${event.id}/tickets`}>
                            <StyledButton
                                sx={{
                                    color: '#FFFFFF',
                                    background: '#EC1066',
                                    '&:hover': {
                                        color: '#FFFFFF',
                                        background: '#EC1066',
                                    }
                                }}>
                                {'BUY NOW'}
                            </StyledButton>
                        </Link>
                    </Box>
                </StyledBoxCardAction>
            </CardActions>
        </StyledBox>
    );
}

export default EventCardBasic;