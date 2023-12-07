import LoginContainer from '../containers/auth/LoginContainer';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const spanTextCss = {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#00B9F5',
};

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        console.log('Handle login success')
        navigate('/users/me');
    }

    return (
        <Container>
            <Grid
                container
                display="flex"
                alignItems="center"
                maxWidth={'800px'}
                margin={'auto'}
            >
                <Grid
                    item
                    sx={{
                        margin: '32px auto',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h5" gutterBottom>
                        <span style={spanTextCss}>Signup</span>
                        {' or '}
                        <span style={spanTextCss}>Login</span>
                    </Typography>
                    <Typography>Sign up to purchase tickets, unlock exclusive content, follow your favourite artists & become a valued member of the Eventwise community.</Typography>
                </Grid>
                <Grid item m={'auto'}>
                    <LoginContainer onLoginSuccess={handleLoginSuccess} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginPage;