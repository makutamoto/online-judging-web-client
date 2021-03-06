import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

// @ts-ignore
import ScrollMemory from 'react-router-scroll-memory';

import * as serviceWorker from './serviceWorker';

import './index.css';
import rootReducer from './reducers';
import App from './containers/App';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
  ),
)

export type DispatchType = typeof store.dispatch;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollMemory />
        <CssBaseline />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
