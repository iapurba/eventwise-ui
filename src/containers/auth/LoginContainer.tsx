import Grid from '@mui/material/Grid';
import OTPLoginContainer from './OTPLoginContainer';
import SSOLogin from '../../components/auth/SSOLogin';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface LoginContainerProps {
    onLoginSuccess: () => void;
};

const LoginContainer: React.FC<LoginContainerProps> = ({ onLoginSuccess }) => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid
            container
            display="flex"
            alignItems="center"
        >
            <Grid
                item sm={12} md={6}
                sx={{
                    paddingRight: isMediumScreen ? '54px' : '0',
                    borderRight: isMediumScreen ? '1px dashed #999' : 'none',
                }}
            >
                <OTPLoginContainer onLoginSuccess={onLoginSuccess} />
            </Grid>
            <Grid
                item sm={12} md={6}
                sx={{
                    paddingLeft: isMediumScreen ? '54px' : '0',
                }}
            >
                <SSOLogin />
            </Grid>
        </Grid>
    );
};

export default LoginContainer;