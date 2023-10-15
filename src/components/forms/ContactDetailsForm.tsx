import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormHeader from './FormHeader';
import StyledTextField from '../common/StyledTextField';


const ContactDetailsForm = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <FormHeader title={'Please update your account details below'} />
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            fullWidth
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            fullWidth
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextField
                            fullWidth
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default ContactDetailsForm;