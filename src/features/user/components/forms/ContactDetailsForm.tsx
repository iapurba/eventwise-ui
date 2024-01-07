import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormHeader from '../../../../components/common/FormHeader';
import StyledTextField from '../../../../components/common/TextField/StyledTextField';
import { ContactDetailsType } from '../../../../types/UserProfileType';
import { ChangeEvent } from 'react';

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
                        <StyledTextField
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
                        <StyledTextField
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
                        <StyledTextField
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