import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const PaymentMethodOptionWrapper = styled(Box)(({ theme }) => ({
    boxShadow: 'none',
    border: '1px solid rgb(240, 241, 242)',
    borderRadius: theme.spacing(1.5),
    padding: '18px 9px',
    margin: '0 0 18px',
}));

const CustomIconButton = styled(IconButton)(() => ({
    '&:hover': {
        background: 'none',
    }
}));

export default PaymentMethodOptionWrapper;

export { CustomIconButton };