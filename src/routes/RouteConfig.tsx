import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';
import { Fragment } from 'react';


const RouteConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/online' />} />
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    >
                        {route?.children &&
                            <Fragment>
                                {route.children.map((childRoute, childIndex) => (
                                    <Route
                                        key={childIndex}
                                        path={childRoute.path}
                                        element={<childRoute.component />}
                                    />
                                ))}
                            </Fragment>
                        }
                    </Route>
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default RouteConfig;