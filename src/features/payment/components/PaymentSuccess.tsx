import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonOne from '../../../common/Button/ButtonOne/ButtonOne';

const PaymentSuccess = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '500px',
            margin: 'auto',
        }}>
            <CheckCircleOutlinedIcon style={{ color: 'green', fontSize: 150 }} />
            <Box sx={{ margin: '24px 0 48px' }}>
                <Typography style={{ fontSize: 24, fontWeight: '600', marginBottom: 10, textAlign: 'center' }}>
                    Congratulations!
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Your transaction was successful.
                    <br />
                    We have sent a confirmation to{' '}
                    <strong style={{ fontWeight: 'bold' }}>+919051555135</strong> and{' '}
                    <strong style={{ fontWeight: 'bold' }}>apurbapanja1@gmail.com</strong>.
                    <br />
                    If you could not find an email from purchases@insider.in, check your Spam or Junk email
                </Typography>
            </Box>
            <ButtonOne label='View Tickets'/>
        </Box>
    );
};

export default PaymentSuccess;