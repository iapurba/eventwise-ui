import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import StyledBox from '../../common/StyledBox';
import FormHeader from '../../common/FormHeader';
import StyledTextField from '../../common/StyledTextField';
import Typography from '@mui/material/Typography';

const BillingDetailsForm = () => {

    return (
        <StyledBox>
            <FormHeader
                title={'Billing Details'}
                subtitle={'These details will be shown on your invoice'}
            />
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowBilingDetails" size="small" />}
                            label={
                                <Typography variant="body1" fontSize={15}>
                                    Use same as delivery details
                                </Typography>
                            }

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            required
                            name="pincode"
                            fullWidth
                            id="pincode"
                            type="text"
                            placeholder="Pincode*"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            required
                            fullWidth
                            id="state"
                            type="text"
                            placeholder="State*"
                            name="state"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </Box>
        </StyledBox>
    );
};

export default BillingDetailsForm;