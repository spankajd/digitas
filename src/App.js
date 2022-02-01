// import logo from './logo.svg';
import Header from './components/Header/Header';
import style from './App.module.scss';
import Navigation from './Navigation';
import { Provider } from 'react-redux';

import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <div className={style.App}>
        <Navigation></Navigation>
      </div>
    </Provider>
  );
}

export default App;
