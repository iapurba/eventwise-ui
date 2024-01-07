import LoginContainer from '../features/auth/containers/LoginContainer';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/common/wrappers/PageWrapper';
import PageHeaderText from '../components/common/Typography/PageHeaderText';
import PageHeaderWrapper from '../components/common/wrappers/PageHeaderWrapper';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        console.log('Handle login success')
        navigate('/users/me');
    }

    return (
        <PageWrapper id='login-page'>
            <PageHeaderWrapper>
                <PageHeaderText>Signup or Login</PageHeaderText>
                <Typography>Sign up to purchase tickets, unlock exclusive content, follow your favourite artists & become a valued member of the Eventwise community.</Typography>
            </PageHeaderWrapper>
            <LoginContainer onLoginSuccess={handleLoginSuccess} />
        </PageWrapper>
    );
};

export default LoginPage;