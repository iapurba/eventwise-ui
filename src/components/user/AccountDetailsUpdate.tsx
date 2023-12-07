import Grid from '@mui/material/Grid';
import ContactDetailsForm from './forms/ContactDetailsForm';
import DeliveryDetailsForm from './forms/DeliveryDetailsForm';
import BillingDetailsForm from './forms/BillingDetailsForm';
import PrimaryButton from '../common/Buttons/PrimaryButton';

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
                <PrimaryButton>UPDATE</PrimaryButton>
            </Grid>
        </Grid>
    );
};

export default AccountDetailsUpdate;