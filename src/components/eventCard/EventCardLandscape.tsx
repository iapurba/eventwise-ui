import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import EllipsisTypography from '../common/EllipsisTypography';
import { CustomEventOutlinedIcon, CustomLocationIcon } from '../common/CustomIcons';

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '9px',
    boxShadow: 'none',
    border: '1px solid rgb(240, 241, 242)',
    cursor: 'pointer',
    '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
    },
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFE',
    padding: '9px',
    fontWeight: 'bold',
    borderRadius: '9px',
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

const EventCard = ({ event }: any) => {
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
                    <CustomEventOutlinedIcon />
                    <StyledTypography>
                        {`December 2`}
                    </StyledTypography>
                    <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#202226',}} />
                    <StyledTypography>
                        {`6 PM`}
                    </StyledTypography>
                </Box>
                <Box display="flex" alignItems="center">
                    <CustomLocationIcon />
                    <StyledTypography>
                        {`Venue to be announced, Kolkata`}
                    </StyledTypography>
                </Box>
            </CardContent>
            <CardActions>
                <StyledBox>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}><span>&#8377;</span>{`1000 Onwards`}</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Divider orientation="vertical" flexItem sx={{ backgroundColor: '#31C0F0', margin: '0 12px' }} />
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{`BUY NOW`}</Typography>
                </StyledBox>
            </CardActions>
        </StyledCard>
    );
};

export default EventCard;