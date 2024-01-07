import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SquareButton from '../../../components/common/Buttons/SquareButton';
import Typography from '@mui/material/Typography';

const ProfileHeaderWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    color: '#FFFFFF',
    backgroundColor: '#0C172f',
    padding: '24px 342px',
}));

const ProfileHeaderContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    width: '100%',
}));

interface UserProfileHeaderProps {
    user: any;
    onEditProfile: () => void;
    onSignOut: () => void;
}

const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
    user,
    onEditProfile,
    onSignOut
}) => {

    return (
        <ProfileHeaderWrapper>
            <ProfileHeaderContainer>
                <Box>
                    <Typography
                        sx={{
                            fontSize: '42px',
                            opacity: user?.firstName ? '1' : '.2',
                            margin: '0 0 12px',
                            fontWeight: 'bold',
                        }}
                    >
                        {user?.firstName
                            ? `${user?.firstName} ${user?.lastName}`
                            : 'Your Name'
                        }
                    </Typography>
                    <Typography>{user?.email}</Typography>
                </Box>
                <Box>
                    <SquareButton onClick={onEditProfile}>Edit Profile</SquareButton>
                    <SquareButton onClick={onSignOut}>Sign out</SquareButton>
                </Box>
            </ProfileHeaderContainer>
        </ProfileHeaderWrapper>
    );
};

export default UserProfileHeader;