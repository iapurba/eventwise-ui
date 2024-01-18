import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ButtonOne from '../../../common/Button/ButtonOne/ButtonOne';

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
            <ButtonOne label='Continue Shopping'/>
        </Box>
    );
};

export default PaymentFailure;