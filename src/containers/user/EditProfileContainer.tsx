import Grid from '@mui/material/Grid';
import ContactDetailsForm from '../../components/user/forms/ContactDetailsForm';
import DeliveryDetailsForm from '../../components/user/forms/DeliveryDetailsForm';
import BillingDetailsForm from '../../components/user/forms/BillingDetailsForm';
import PrimaryButton from '../../components/common/Buttons/PrimaryButton';

const gridStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
};

const EditProfileContainer = () => {
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

export default EditProfileContainer;