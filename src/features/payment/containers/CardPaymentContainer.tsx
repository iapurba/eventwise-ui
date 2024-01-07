import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PayButton from "../../../components/common/Buttons/PayButton";
import PaymentMethodOption from "../components/PaymentMethodOption";
import PaymentContentWrapper from "../../../components/common/wrappers/PaymentContentWrapper";
import Note from "../../../components/common/Note";
import { styled } from "@mui/material/styles";
import CardPayInputTextField from "../../../components/common/TextField/CardPayInputTextField";

const CardPaymentContentWrapper = styled(Box)(({ theme }) => ({
    boxShadow: 'none',
    border: '1px solid rgb(240, 241, 242)',
    borderRadius: theme.spacing(1.5),
    padding: '0 18px 24px',
    margin: '0 0 18px',
}));

const CardPaymentContainer = () => {
    return (
        <>
            <PaymentMethodOption
                svgImage={<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="9" fill="#FAFAFA"></rect>
                    <path d="M14.5 19.5C14.2239 19.5 14 19.7239 14 20C14 20.2761 14.2239 20.5 14.5 20.5H21.5C21.7761 20.5 22 20.2761 22 20C22 19.7239 21.7761 19.5 21.5 19.5H14.5Z" fill="#0C172F"></path>
                    <path d="M14 22C14 21.7239 14.2239 21.5 14.5 21.5H18.5C18.7761 21.5 19 21.7239 19 22C19 22.2761 18.7761 22.5 18.5 22.5H14.5C14.2239 22.5 14 22.2761 14 22Z" fill="#0C172F"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 12.5V12C25 11.1716 24.3284 10.5 23.5 10.5H10.5C9.67157 10.5 9 11.1716 9 12V22C9 22.8284 9.67157 23.5 10.5 23.5H11V24C11 24.8284 11.6716 25.5 12.5 25.5H25.5C26.3284 25.5 27 24.8284 27 24V14C27 13.1716 26.3284 12.5 25.5 12.5H25ZM23.5 11.5H10.5C10.2239 11.5 10 11.7239 10 12V14.5L11 14.5V14C11 13.1716 11.6716 12.5 12.5 12.5H24V12C24 11.7239 23.7761 11.5 23.5 11.5ZM10 22V15.5H11V22.5H10.5C10.2239 22.5 10 22.2761 10 22ZM12.5 13.5H25.5C25.7761 13.5 26 13.7239 26 14V16.5L12 16.5L12 14C12 13.7239 12.2239 13.5 12.5 13.5ZM12 17.5L12 24C12 24.2761 12.2239 24.5 12.5 24.5H25.5C25.7761 24.5 26 24.2761 26 24V17.5L12 17.5Z" fill="#0C172F"></path>
                </svg>}
                methodName="Card">
                <CardPaymentContentWrapper>
                    <Note>Important: This is to mock the payment process. Do not enter your real credentials. Kindly try out from the list.</Note>
                    <PaymentContentWrapper pb={3}>
                        <Grid container spacing={4}>
                            <Grid item sm={12}>
                                <CardPayInputTextField
                                    fullWidth
                                    label="Card Number"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <CardPayInputTextField
                                    fullWidth
                                    id="expiry"
                                    label="Expiry / Validity"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item sm={6}>
                                <CardPayInputTextField
                                    fullWidth
                                    id="cvv"
                                    label="CVV"
                                    variant="standard"
                                />
                            </Grid>
                        </Grid>
                    </PaymentContentWrapper>
                </CardPaymentContentWrapper>
                <Box sx={{ padding: '12px 0px' }}>
                    <PayButton>{`Pay ₹100.00`}</PayButton>
                </Box>
            </PaymentMethodOption>
        </>
    );
};

export default CardPaymentContainer;
