import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormWrapper from '../../../../components/common/FormWrapper';
import FormHeader from '../../../../components/common/FormHeader';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import { DeliveryDetailsType } from '../../../../types/UserProfileType';
import { ChangeEvent } from 'react';
import CustomTextField from '../../../../common/CustomTextField/CustomTextField';

interface DeliveryDetailsFormProps {
    deliveryDetails: DeliveryDetailsType;
    onInputChange: (field: string, value: string) => void;
};

const DeliveryDetailsForm: React.FC<DeliveryDetailsFormProps> = ({
    deliveryDetails,
    onInputChange,
}) => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onInputChange(name, value);
    }
    return (
        <FormWrapper>
            <FormHeader
                title={'Delivery details'}
                subtitle={'These details will be used to send physical tickets'}
            />
            <Box component="form" noValidate sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CustomTextField
                            styleType='borderOnly'
                            required
                            fullWidth
                            id="addressLine1"
                            name="addressLine1"
                            type="text"
                            placeholder='Address 1*'
                            size="small"
                            value={deliveryDetails.addressLine1}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField
                            styleType='borderOnly'
                            required
                            fullWidth
                            id="addressLine2"
                            name="addressLine2"
                            type="text"
                            placeholder="Address 2*"
                            size="small"
                            value={deliveryDetails.addressLine2}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            styleType='borderOnly'
                            required
                            fullWidth
                            id="landmark"
                            name="landmark"
                            type="text"
                            placeholder="Landmark"
                            size="small"
                            value={deliveryDetails.landmark}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            styleType='borderOnly'
                            required
                            fullWidth
                            id="city"
                            name="city"
                            type="text"
                            placeholder="City*"
                            size="small"
                            value={deliveryDetails.city}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            styleType='borderOnly'
                            fullWidth
                            id="pincode"
                            name="pincode"
                            type="text"
                            placeholder="Pincode*"
                            size="small"
                            value={deliveryDetails.pincode}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            styleType='borderOnly'
                            required
                            fullWidth
                            id="state"
                            name="state"
                            type="text"
                            placeholder="State*"
                            size="small"
                            value={deliveryDetails.state}
                            onChange={handleInputChange}
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
                    <RadioGroup
                        name="addressType"
                        row
                        value={deliveryDetails.addressType}
                        onChange={(e: any) => onInputChange('addressType', e.target.value)}
                    >
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
        </FormWrapper>
    );
}

export default DeliveryDetailsForm;