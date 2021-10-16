import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Hello</h1>
    </div>
  </Provider>
);

export default App;
