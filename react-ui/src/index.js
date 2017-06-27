import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const hashHistory = BrowserRouter.hashHistory;
ReactDOM.render(
  <BrowserRouter history={hashHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
