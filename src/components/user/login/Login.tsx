import React, { useState } from 'react';

const Login = () => {
    // const userAuth = useSelector((state: RootState) => state.auth);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={credentials.email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={credentials.password}
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
};

export default Login;