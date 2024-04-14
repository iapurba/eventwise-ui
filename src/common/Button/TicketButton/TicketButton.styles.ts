import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const TicketButtonWrapper = styled(Button)(
    ({ className, theme }) => ({
        color: '#FFFFFF',
        padding: '6px 24px',
        marginTop: theme.spacing(1),
        backgroundColor: className?.includes('btn-disabled')
            ? '#E2E3E6' : '#3695D8',
        borderRadius: '2px',
        fontWeight: className?.includes('btn-disabled')
        ? '600' : '500',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#3695D8',
        }
    }));

export default TicketButtonWrapper;
