import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const location = useLocation();

    return (
        isLoggedIn ? <>{element}</>
            : <Navigate
                to='/users/login'
                state={{ from: location.pathname }}
                replace
            />
    );
};

export default PrivateRoute;