import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const StyledText = styled(Typography)(
    ({ className, theme }) => {
        return (className.includes('bold')) ? {
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            color: '#45474D',
            margin: theme.spacing(0, 1),
        } : {
            fontSize: '15px',
            fontFamily: 'Inter, sans-serif',
            color: '#202226',
            margin: theme.spacing(0, 1),
        }
    });