import { Provider } from 'react-redux';
import store from './redux/store';
import RouteConfig from './routes/RouteConfig';

const App = () => {
  return (
    <Provider store={store}>
      <RouteConfig />
    </Provider>
  );
}

export default App;
