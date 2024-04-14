import { Button, styled } from '@mui/material';

const PayButtonWrapper = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '12px 16px',
    margin: 'auto',
    width: '100%',
    whiteSpace: 'nowrap',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    background: '#00B9F9',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#00B9F9',
    },
}));

export default PayButtonWrapper;