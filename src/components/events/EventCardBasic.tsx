import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import StyledButton from '../common/StyledButton';
import {
    CustomBookmarkIcon,
    CustomEventIcon,
    CustomFavouriteIcon,
    CustomLocationIcon
} from '../common/CustomIcons';


const StyledBox = styled(Box)(({ theme }) => ({
    minWidth: theme.spacing(7),
    minHeight: '100%',
    padding: theme.spacing(1),
    fontSize: '11px',
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'none',
    border: '1px solid #F0F1F2',
    alignItems: 'center',
    textAlign: 'center',
}));

const StyledBoxCardAction = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    borderRadius: theme.shape.borderRadius,
    alignItems: 'center',
    width: '100%',
}));

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    border: '1px solid #E1E3E6',
    borderRadius: theme.shape.borderRadius,
    padding: '12px'
}));

const EventCardBasic = () => {

    return (
        <StyledCard>
            <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                    <Typography
                        gutterBottom
                        component='div'
                        variant='h5'
                        sx={{ fontWeight: 'bold' }}
                    >
                        {'This is an Event Title with some more text'}
                    </Typography>
                    <StyledBox>
                        <CustomFavouriteIcon />
                        <Typography variant='subtitle2' m={0} p={0} fontSize={'11px'}>50</Typography>
                    </StyledBox>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <CustomBookmarkIcon />
                    <Typography variant="body1" ml={1}>Music</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                    <CustomEventIcon />
                    <Typography variant='body1' ml={1}>
                        {`December 2 | 6 PM`}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <CustomLocationIcon />
                    <Typography variant='body1' ml={1}>
                        {`Venue to be announced, Kolkata`}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <StyledBoxCardAction>
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold' }}
                    >
                        <span>&#8377;</span>{'1999 Onwards'}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <StyledButton>
                            {'BUY NOW'}
                        </StyledButton>
                    </Box>
                </StyledBoxCardAction>
            </CardActions>
        </StyledCard>
    );
}

export default EventCardBasic;