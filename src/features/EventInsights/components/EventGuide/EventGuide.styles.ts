import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const EventGuideWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    border: '1px solid rgb(225, 227, 230)',
    borderRadius: theme.spacing(1),
    padding: '18px',
    marginTop: '24px',
}));

const EventGuideItemWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '28px'
});

const EventGuideHeader = styled(Typography)({
    fontWeight: 'bold', 
    fontSize: '18px',
    marginBottom: '8px',
});


const StyledText1 = styled(Typography)({
    color: '#7A7C82',
    fontSize: '14px'
});

const StyledText2 = styled(Typography)({
    fontSize: '16px'
});

export { StyledText1, StyledText2, EventGuideItemWrapper, EventGuideHeader};

export default EventGuideWrapper;