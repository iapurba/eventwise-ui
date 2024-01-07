import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const StyledText = styled(Typography)(() => ({
    fontSize: '19px',
    color: '#000000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStretch: 'condensed',
    fontFamily: 'roboto condensed, sans-serif',
}));

const EditIcon = styled(EditRoundedIcon)(() => ({
    border: '1px solid rgb(240, 241, 242)',
    borderRadius: '10px',
    padding: '9px',
    fontSize: '40px',
    cursor: 'pointer',
}));

const OrderSummaryWrapper = styled(Box)(({ theme }) => ({
    boxShadow: 'none',
    border: '1px solid rgb(240, 241, 242)',
    borderRadius: theme.spacing(1.5),
    padding: '15px 20px 6px',
}));

const PaymentOrderSummary = () => {
    return (
            <OrderSummaryWrapper className='payment-order-summary'>
                <Box sx={{
                    padding: '12px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between', 
                }}>
                    <StyledText>ORDER SUMMARY</StyledText>
                    <EditIcon/>
                </Box>
                <Box sx={{
                    minHeight: '160px'
                }} >
                    <Box sx={{
                        padding: '9px 0',
                        borderBottom: '1px solid rgb(240, 241, 242)',
                    }}>
                        <Typography sx={{ fontSize: '11px', textTransform: 'uppercase' }}>
                            This is an Event Name
                        </Typography>
                        <Typography sx={{ fontSize: '14px' }}>
                            {`1 x This is an ticket`}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '9px 0 0',
                    padding: '9px 0',
                    borderTop: '1px solid rgb(240, 241, 242)'
                }}>
                    <Typography sx={{color: '#7A7C82',fontSize: '18px',}}>Total</Typography>
                    <Typography sx={{fontSize: '18px', fontWeight: '500'}}>₹100.00</Typography>
                </Box>
            </OrderSummaryWrapper>
    );
};

export default PaymentOrderSummary;