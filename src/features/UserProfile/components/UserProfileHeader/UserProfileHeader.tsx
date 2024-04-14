import Typography from '@mui/material/Typography';
import {
    CustomButton, 
    ProfileHeaderContent,
    ProfileHeaderWrapper
} from './UserProfileHeader.styles';

interface UserProfileHeaderProps {
    email: string | null;
    firstName?: string;
    lastName?: string;
    onEditProfile: () => void;
    onSignOut: () => void;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
    email,
    firstName,
    lastName,
    onEditProfile,
    onSignOut
}) => {

    return (
        <ProfileHeaderWrapper className='user-profile-header'>
            <ProfileHeaderContent>
                <div>
                    <Typography sx={{
                        fontSize: '42px',
                        opacity: firstName ? '1' : '.2',
                        margin: '0 0 12px',
                        fontWeight: 'bold',
                    }}>
                        {firstName ? `${firstName} ${lastName}` : 'Your Name'}
                    </Typography>
                    <Typography>{email}</Typography>
                </div>
                <div>
                    <CustomButton onClick={onEditProfile}>Edit Profile</CustomButton>
                    <CustomButton onClick={onSignOut}>Sign out</CustomButton>
                </div>
            </ProfileHeaderContent>
        </ProfileHeaderWrapper>
    );
};

export default UserProfileHeader;