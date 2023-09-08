import React from 'react';
import Login from './components/user/login/Login';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
