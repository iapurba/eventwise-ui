import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardPaymentContainer from './CardPaymentContainer';
import PaymentOrderSummary from '../components/PaymentOrderSummary';
import { styled } from '@mui/material/styles';
import UPIPaymentContainer from './UPIPaymentContainer';

const StyledText = styled(Typography)(({ theme }) => ({
    fontSize: '25px',
    color: '#000000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStretch: 'condensed',
    fontFamily: 'roboto condensed, sans-serif',
    marginBottom: '14px',
}));

const PaymentMethodContainer = () => {
    return (
        <Box
            className='payment-methods-container'
            sx={{
                justifyContent: 'center',
                maxWidth: '900px',
                margin: 'auto',
            }}
        >
            <StyledText>PAYMENT METHODS</StyledText>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Box sx={{width: '532px'}}>
                    <UPIPaymentContainer/>
                    <CardPaymentContainer />
                </Box>
                <Box sx={{width: '343px'}}>
                    <PaymentOrderSummary />
                </Box>
            </Box>
        </Box>
    );
};

export default PaymentMethodContainer;