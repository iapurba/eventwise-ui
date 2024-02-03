import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
    EditIcon,
    OrderSummaryFooterWrapper,
    OrderSummaryHeader,
    OrderSummaryHeaderWrapper,
    OrderSummaryWrapper
} from './PaymentOrderSummary.styles';


const PaymentOrderSummary = () => {
    return (
        <OrderSummaryWrapper className='payment-order-summary'>
            <OrderSummaryHeaderWrapper>
                <OrderSummaryHeader>ORDER SUMMARY</OrderSummaryHeader>
                <EditIcon />
            </OrderSummaryHeaderWrapper>
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
            <OrderSummaryFooterWrapper>
                <Typography sx={{ color: '#7A7C82', fontSize: '18px', }}>Total</Typography>
                <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>₹100.00</Typography>
            </OrderSummaryFooterWrapper>
        </OrderSummaryWrapper>
    );
};

export default PaymentOrderSummary;