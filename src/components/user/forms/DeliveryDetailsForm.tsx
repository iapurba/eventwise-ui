import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import StyledBox from '../../common/StyledBox';
import StyledTextField from '../../common/StyledTextField';
import FormHeader from '../../common/FormHeader';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';


const DeliveryDetailsForm = () => {

    return (
        <StyledBox>
            <FormHeader
                title={'Delivery details'}
                subtitle={'These details will be used to send physical tickets'}
            />
            <Box component="form" noValidate sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <StyledTextField
                            required
                            fullWidth
                            id="address1"
                            name="address1"
                            type="text"
                            placeholder='Address 1*'
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledTextField
                            required
                            fullWidth
                            id="address2"
                            name="address2"
                            type="text"
                            placeholder="Address 2*"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            required
                            fullWidth
                            id="landmark"
                            name="landmark"
                            type="text"
                            placeholder="Landmark"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            required
                            fullWidth
                            id="city"
                            name="city"
                            type="text"
                            placeholder="City*"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <StyledTextField
                            fullWidth
                            id="pincode"
                            name="pincode"
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
                            name="state"
                            type="text"
                            placeholder="State*"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '15px',
                    }}
                >
                    <FormHeader title={"Address Type*"} />
                    <RadioGroup name="addressType" row>
                        <FormControlLabel
                            value="residential"
                            control={<Radio size="small" sx={{ padding: '0 6px' }} />}
                            label={
                                <Typography variant="body1" fontSize={15}>
                                    Residential
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="business"
                            control={<Radio size="small" sx={{ padding: '0 6px' }} />}
                            label={
                                <Typography variant="body1" fontSize={15}>
                                    Business
                                </Typography>
                            }
                            sx={{ margin: '0' }}
                        />
                    </RadioGroup>
                </Box>
            </Box>
        </StyledBox>
    );
}

export default DeliveryDetailsForm;