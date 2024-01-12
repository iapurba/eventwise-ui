import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormWrapper from '../../../../components/common/FormWrapper';
import FormHeader from '../../../../components/common/FormHeader';
import Typography from '@mui/material/Typography';
import { BillingDetailsType } from '../../../../types/UserProfileType';
import { ChangeEvent } from 'react';
import CustomTextField from '../../../../common/CustomTextField/CustomTextField';

interface BillingDetailsFormProps {
    billingDetails: BillingDetailsType;
    onInputChange: (field: string, value: string) => void;
    onUseSameDetails: (isChecked: boolean) => void;
};

const BillingDetailsForm: React.FC<BillingDetailsFormProps> = ({
    billingDetails,
    onInputChange,
    onUseSameDetails
}) => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onInputChange(name, value);
    }
    return (
        <FormWrapper>
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
                            onChange={(e) => onUseSameDetails((e.target as HTMLInputElement).checked)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            styleType='borderOnly'
                            required
                            name="pincode"
                            fullWidth
                            id="pincode"
                            type="text"
                            placeholder="Pincode*"
                            size="small"
                            value={billingDetails.pincode}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            styleType='borderOnly'
                            required
                            fullWidth
                            id="state"
                            type="text"
                            placeholder="State*"
                            name="state"
                            size="small"
                            value={billingDetails.state}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </Box>
        </FormWrapper>
    );
};

export default BillingDetailsForm;