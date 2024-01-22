import Typography from '@mui/material/Typography';
import { ProfileHeaderContent, ProfileHeaderWrapper } from './UserProfileHeader.styles';
import SquareButton from '../../../../components/common/Buttons/SquareButton';


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
                    <SquareButton onClick={onEditProfile}>Edit Profile</SquareButton>
                    <SquareButton onClick={onSignOut}>Sign out</SquareButton>
                </div>
            </ProfileHeaderContent>
        </ProfileHeaderWrapper>
    );
};

export default UserProfileHeader;