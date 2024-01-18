import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const EventDetailsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    border: '1px solid rgb(225, 227, 230)',
    borderRadius: theme.spacing(1),
    padding: '18px'
}));

const EventDetailsFooter = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    alignItems: 'center',
    width: '100%',
    marginTop: '8px',
}));

export { EventDetailsFooter };

export default EventDetailsWrapper;