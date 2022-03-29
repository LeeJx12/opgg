import React from 'react';
import ReactDOM from 'react-dom';
import { App, getVersion } from './app';
import { Provider } from 'react-redux';
import ReduxRegistry from './redux/ReduxRegistry';

let store = ReduxRegistry._createStore();
window.APP = {store : store};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.dispatch(getVersion());
