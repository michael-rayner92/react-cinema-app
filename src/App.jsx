import { Provider } from 'react-redux';
import { Header } from './components/header';
import { Main } from './components/main';
import store from './redux/store';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="app">
      <Main />
    </div>
  </Provider>
);

export default App;
