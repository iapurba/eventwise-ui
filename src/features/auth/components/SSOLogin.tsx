import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { styled } from '@mui/material/styles';

const GoogleSSOButton = styled(Button)(({ theme }) => ({
    borderRadius: '2px',
    textTransform: 'uppercase',
    padding: '8px 20px',
    background: 'rgba(219, 68, 55, .9)',
    boxShadow: 'none',
    '&:hover': {
        background: 'rgba(219, 68, 55, 1)'
    },
}));

const AppleSSOButton = styled(Button)(({ theme }) => ({
    borderRadius: '2px',
    textTransform: 'uppercase',
    padding: '8px 20px',
    background: 'rgba(0, 0, 0, .8)',
    boxShadow: 'none',
    '&:hover': {
        background: 'rgba(0, 0, 0, .9)'
    },
}));


const SSOLogin = () => {
    return (
        <Box display="flex" flexDirection="column" pb={1}>
            <Typography variant="h6" fontWeight="bold" lineHeight={1.4}>
                Or login using your social accounts
            </Typography>
            <GoogleSSOButton
                sx={{ mt: 2 }}
                variant="contained"
                startIcon={<GoogleIcon />}
            >
                Continue With Google
            </GoogleSSOButton>
            <AppleSSOButton
                sx={{ mt: 2 }}
                variant="contained"
                startIcon={<AppleIcon />}
            >
                Continue With Apple
            </AppleSSOButton>
        </Box>
    );
};

export default SSOLogin;