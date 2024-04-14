import Box from '@mui/material/Box';
import PayButton from '../components/PayButton/PayButton';
import PaymentMethodOption from '../components/PaymentMethodOption/PaymentMethodOption';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Note from '../../../common/Note/Note';
import CustomTextField from '../../../common/CustomTextField/CustomTextField';

const UPIPaymentContentWrapper = styled(Box)(({ theme }) => ({
    boxShadow: 'none',
    border: '1px solid rgb(240, 241, 242)',
    borderRadius: theme.spacing(1.5),
    padding: '0 18px 18px',
    margin: '0 0 18px',
}));

const UPIPaymentContainer = () => {
    return (
        <>
            <PaymentMethodOption
                svgImage={<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="9" fill="#FAFAFA"></rect>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3069 7.33337L14.0745 28.6667L26 17.9728L20.3069 7.33337Z" fill="#008B44"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2324 7.33337L10 28.6667L21.9255 17.9728L16.2324 7.33337Z" fill="#F37820"></path>
                </svg>}
                methodName="UPI">
                <UPIPaymentContentWrapper>
                    <Note>Important: This is mock payment method. Do not enter real VPA or UPI.</Note>
                    <Grid container spacing={2}>
                        <Grid item sm={12}>
                            <CustomTextField
                                styleType='borderAndLabel'
                                fullWidth
                                id="vpa"
                                name="vpa"
                                type="text"
                                label="Enter VPA"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={12} sx={{ margin: 'auto', textAlign: 'center' }}>
                            <Typography sx={{
                                color: '#506d85',
                                fontSize: '12px',
                                fontFamily: 'roboto condensed, sans-serif',
                                fontWeight: '600',
                            }}>OR</Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <CustomTextField
                                styleType='borderAndLabel'
                                fullWidth
                                id="upi"
                                name="upi"
                                type="text"
                                label="Enter Mobile No./UPI No."
                                size="small"
                            />
                        </Grid>
                    </Grid>


                    <Box sx={{ padding: '18px 0px 0px' }}>
                        <PayButton label={`Pay ₹100.00`}/>
                    </Box>
                </UPIPaymentContentWrapper>
            </PaymentMethodOption>
        </>
    );
};

export default UPIPaymentContainer;
