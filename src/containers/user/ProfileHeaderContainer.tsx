import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import RectangularButton from '../../components/common/Buttons/RecangularButton';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

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
                            // opacity: '.2',
                            margin: '0 0 12px',
                            fontWeight: 'bold',
                        }}
                    >
                        Apurba Panja
                    </Typography>
                    <Typography>apurbapanja1@gmail.com</Typography>
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