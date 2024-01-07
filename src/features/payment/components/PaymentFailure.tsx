import Typography from '@mui/material/Typography';
import SecondaryButton from '../../../components/common/Buttons/SecondaryButton';
import Box from '@mui/material/Box';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const PaymentFailure = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '500px',
            margin: 'auto',
        }}>
            <ErrorOutlineOutlinedIcon style={{ color: 'red', fontSize: 150 }} />
            <Typography style={{
                fontSize: 24,
                fontWeight: '600',
                marginBottom: 10,
                textAlign: 'center',
                margin: '24px 0'
            }}>
                Oh no, payment failed
            </Typography>
            <SecondaryButton>
                Continue Shopping
            </SecondaryButton>
        </Box>
    );
};

export default PaymentFailure;