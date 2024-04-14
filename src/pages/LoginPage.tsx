import LoginContainer from '../features/Authentication/containers/LoginContainer';
import { useNavigate } from 'react-router-dom';
import PageBuilder from './PageBuilder/PageBuilder';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        console.log('Handle login success')
        navigate('/users/me');
    }

    return (
        <PageBuilder id='login-page'
            title='Signup or Login'
        >
            <LoginContainer onLoginSuccess={handleLoginSuccess} />
        </PageBuilder>
    );
};

export default LoginPage;

// Sign up to purchase tickets, unlock exclusive content, follow your favourite artists & become a valued member of the Eventwise community.