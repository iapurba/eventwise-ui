import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import EllipsisTypography from '../common/EllipsisTypography';
import { StyledEventIcon, StyledLocationIcon } from '../common/StyledIcons';
import StyledCard from '../common/StyledCard';
import { formatDate } from '../../utils/dateTimeFormatter';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFE',
    padding: '9px',
    fontWeight: 'bold',
    borderRadius: theme.shape.borderRadius,
    alignItems: 'center',
    width: '100%',
    fontFamily: 'Inter, sans-serif',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 'bold',
    color: '#45474D',
    margin: theme.spacing(0, 1),
}));

const PrimaryEventCard = ({ event }: any) => {
    return (
        <StyledCard>
            <CardMedia
                sx={{ height: 210 }}
                image={`${process.env.PUBLIC_URL}/images/event-poster.jpg`}
            />
            <CardContent>
                <EllipsisTypography gutterBottom>
                    {event?.title}
                </EllipsisTypography>
                <Box display="flex" alignItems="center" mb={1}>
                    <StyledEventIcon />
                    <StyledTypography>
                        {formatDate(event.date)}
                    </StyledTypography>
                    <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#202226',}} />
                    <StyledTypography>
                        {event.startTime}
                    </StyledTypography>
                </Box>
                <Box display="flex" alignItems="center">
                    <StyledLocationIcon />
                    <StyledTypography>
                        {`${event.location.venue}, ${event.location.address.city}`}
                    </StyledTypography>
                </Box>
            </CardContent>
            <CardActions>
                <StyledBox>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{`₹${1000} Onwards`}</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#31C0F0', margin: '0 12px' }} />
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{`BUY NOW`}</Typography>
                </StyledBox>
            </CardActions>
        </StyledCard>
    );
};

export default PrimaryEventCard;