import Grid from '@mui/material/Grid';
import ContactDetailsForm from './forms/ContactDetailsForm';
import DeliveryDetailsForm from './forms/DeliveryDetailsForm';
import BillingDetailsForm from './forms/BillingDetailsForm';
import StyledButton from '../common/Buttons/StyledButton';

const gridStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
};

const AccountDetailsUpdate = () => {
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

export default AccountDetailsUpdate;