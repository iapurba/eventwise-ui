import LoginContainer from '../containers/LoginContainer';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const LoginPage = () => {

    const spanTextCss = {
        fontSize: '26px',
        fontWeight: 'bold',
        color: '#00B9F5',
    };

    return (
        <Container>
            <Grid
                container
                display="flex"
                alignItems="center"
            >
                <Grid
                    item
                    sm={12}
                    md={12}
                    sx={{
                        margin: '32px 0',
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
                    <LoginContainer />
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginPage;