import Grid from '@mui/material/Grid';
import ContactDetailsForm from './ContactDetailsForm';
import DeliveryDetailsForm from './DeliveryDetailsForm';
import BillingDetailsForm from './BillingDetailsForm';
import StyledButton from '../common/StyledButton';

const gridStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
};

const AccountDetailsForm = () => {
    return (

        <Grid container sx={gridStyle}>
            <Grid item mt={1}>
                <ContactDetailsForm />
            </Grid>
            <Grid item mt={2}>
                <DeliveryDetailsForm />
            </Grid>
            <Grid item mt={2}>
                <BillingDetailsForm />
            </Grid>
            <Grid item mt={2}>
                <StyledButton>UPDATE</StyledButton>
            </Grid>
        </Grid>
    );
};

export default AccountDetailsForm;