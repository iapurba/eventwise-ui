import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginButton from '../LoginButton/LoginButton';

const OAuthLogin = () => {
    return (
        <Box display="flex" flexDirection="column" pb={1}>
            <Typography variant="h6" fontWeight="bold" lineHeight={1.4}>
                Or login using your social accounts
            </Typography>
            <LoginButton
                method='google'
                variant='contained'
                label={'Continue With Google'}
                sx={{ mt: 2 }}
                onClick={() => ({})}
            />
            <LoginButton
                method='apple'
                variant='contained'
                label={'Continue With Apple'}
                onClick={() => ({})}
            />
        </Box>
    );
};

export default OAuthLogin;