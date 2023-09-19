import { Provider } from 'react-redux';
import store from './redux/store';
import RouteConfig from './routes/RouteConfig';
import PrimaryHeader from './components/layouts/Header';

const App = () => {
  return (
    <Provider store={store}>
      <PrimaryHeader/>
      <RouteConfig />
    </Provider>
  );
}

export default App;
