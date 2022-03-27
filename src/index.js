import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { Provider } from 'react-redux';
import ReduxRegistry from './redux/ReduxRegistry';
import { getItemList } from './app';

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

//TODO: 버전 체크 가능하면 PersistenceRegistry에 저장하도록 수정
store.dispatch(getItemList());
