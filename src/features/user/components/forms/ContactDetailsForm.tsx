import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormHeader from '../../../../components/common/FormHeader';
import { ContactDetailsType } from '../../../../types/UserProfileType';
import { ChangeEvent } from 'react';
import CustomTextField from '../../../../common/CustomTextField/CustomTextField';

interface ContactDetailsFormProps {
    contactDetails: ContactDetailsType;
    onInputChange: (field: string, value: string) => void;
}

const ContactDetailsForm: React.FC<ContactDetailsFormProps> = ({
    contactDetails,
    onInputChange,
}) => {

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onInputChange(name, value);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <FormHeader title={'Please update your account details below'} />
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            styleType='borderOnly'
                            fullWidth
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            size="small"
                            value={contactDetails.firstName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomTextField
                            styleType='borderOnly'
                            fullWidth
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            size="small"
                            value={contactDetails.lastName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextField
                            styleType='borderOnly'
                            fullWidth
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            size="small"
                            value={contactDetails.phone}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default ContactDetailsForm;