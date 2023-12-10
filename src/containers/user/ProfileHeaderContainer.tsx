import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import RectangularButton from '../../components/common/Buttons/RecangularButton';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useGetUserProfile } from '../../features/user/userQuery';
import { useEffect } from 'react';

const ProfileWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    color: '#FFFFFF',
    backgroundColor: '#0C172f',
    padding: '24px 342px',
}));

const StyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    width: '100%',
}));


const ProfileHeaderContainer = () => {
    const { user } = useGetUserProfile();

    useEffect(() => {
        console.log(user);
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(logoutUser());
        navigate('/explore/kolkata')
    };

    return (
        <ProfileWrapper>
            <StyledBox>
                <Box>
                    <Typography
                        sx={{
                            fontSize: '42px',
                            opacity: user?.profile?.firstName ? '1' : '.2',
                            margin: '0 0 12px',
                            fontWeight: 'bold',
                        }}
                    >
                        {user?.profile?.firstName
                            ? `${user?.profile?.firstName} ${user?.profile?.lastName}`
                            : 'Your Name'
                        }
                    </Typography>
                    <Typography>{user?.email}</Typography>
                </Box>
                <Box>
                    <RectangularButton>Edit Profile</RectangularButton>
                    <RectangularButton onClick={handleSignOut}>Sign out</RectangularButton>
                </Box>
            </StyledBox>
        </ProfileWrapper>
    );
};

export default ProfileHeaderContainer;