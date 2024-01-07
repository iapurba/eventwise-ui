import { useState } from 'react';
import Grid from '@mui/material/Grid';
import ContactDetailsForm from '../components/forms/ContactDetailsForm';
import DeliveryDetailsForm from '../components/forms/DeliveryDetailsForm';
import BillingDetailsForm from '../components/forms/BillingDetailsForm';
import PrimaryButton from '../../../components/common/Buttons/PrimaryButton';
import { UserProfileType } from '../../../types/UserProfileType';
import { useUpdateUserProfile } from '../userMutation';
import { constructUpdateUserJsonPayload } from '../../../processors/userProcessor';
import { getStateNameFromPincode } from '../../../utils/pincodeUtils';

const gridStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '600px',
    margin: 'auto',
};

interface EditProfileProps {
    initialProfile: any;
}

const EditProfileContainer: React.FC<EditProfileProps> = ({ initialProfile }) => {
    const [profile, setProfile] = useState<UserProfileType>({
        id: initialProfile?.id,
        contactDetails: {
            firstName: initialProfile?.firstName,
            lastName: initialProfile?.lastName,
            phone: initialProfile?.phone,
        },
        deliveryDetails: {
            addressLine1: '',
            addressLine2: '',
            landmark: '',
            city: '',
            state: '',
            pincode: '',
            addressType: '',
            ...initialProfile?.deliveryDetails,
        },
        billingDetails: {
            state: '',
            pincode: '',
            ...initialProfile?.billingDetails,
        },
    });

    const { updateUserProfile } = useUpdateUserProfile();

    const handleContactDetailsChnage = (field: string, value: string) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            contactDetails: {
                ...prevProfile.contactDetails,
                [field]: value,
            },
        }));
    };

    const handleDeliveryDetailsChange = async (field: string, value: string) => {
        if (field === 'pincode' && value.length === 6) {
            const stateName = await getStateNameFromPincode(value);
            setProfile((prevProfile) => ({
                ...prevProfile,
                deliveryDetails: {
                    ...prevProfile.deliveryDetails,
                    [field]: value,
                    state: stateName ? stateName : '',
                },
            }));
        } else {
            setProfile((prevProfile) => ({
                ...prevProfile,
                deliveryDetails: {
                    ...prevProfile.deliveryDetails,
                    [field]: value,
                },
            }));
        };
    };

    const handleBillingDetailsChange = async (field: string, value: string) => {
        if (field === 'pincode' && value.length === 6) {
            const stateName = await getStateNameFromPincode(value);
            setProfile((prevProfile) => ({
                ...prevProfile,
                billingDetails: {
                    ...prevProfile.billingDetails,
                    [field]: value,
                    state: stateName ? stateName : '',
                },
            }));
        } else {
            setProfile((prevProfile) => ({
                ...prevProfile,
                billingDetails: {
                    ...prevProfile.billingDetails,
                    [field]: value,
                },
            }));
        };
    };

    const handleUseSameDetails = (isChecked: boolean) => {
        if (isChecked) {
            setProfile((prevProfile) => ({
                ...prevProfile,
                billingDetails: {
                    ...prevProfile.billingDetails,
                    state: prevProfile.deliveryDetails.state,
                    pincode: prevProfile.deliveryDetails.pincode,
                },
            }));
        } else {
            setProfile((prevProfile) => ({
                ...prevProfile,
                billingDetails: {
                    ...prevProfile.billingDetails,
                    state: '',
                    pincode: '',
                },
            }));
        };
    };

    const handleProfileUpdate = async (e: any) => {
        e.preventDefault();
        const updatedData = constructUpdateUserJsonPayload(profile);
        await updateUserProfile(profile.id, updatedData);
    };

    return (
        <Grid container sx={gridStyle}>
            <Grid item mt={1}>
                <ContactDetailsForm
                    contactDetails={profile.contactDetails}
                    onInputChange={handleContactDetailsChnage}
                />
            </Grid>
            <Grid item mt={2}>
                <DeliveryDetailsForm
                    deliveryDetails={profile.deliveryDetails}
                    onInputChange={handleDeliveryDetailsChange}
                />
            </Grid>
            <Grid item mt={2}>
                <BillingDetailsForm
                    billingDetails={profile.billingDetails}
                    onInputChange={handleBillingDetailsChange}
                    onUseSameDetails={handleUseSameDetails}
                />
            </Grid>
            <Grid item mt={2}>
                <PrimaryButton onClick={handleProfileUpdate}>UPDATE</PrimaryButton>
            </Grid>
        </Grid>
    );
};

export default EditProfileContainer;