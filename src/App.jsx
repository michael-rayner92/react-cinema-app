import { Provider } from 'react-redux';
import { Header } from './components/header';
import store from './redux/store';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="App">
      <h1>Hello</h1>
    </div>
  </Provider>
);

export default App;
