import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/routes.js';
import { Provider } from 'react-redux';

import { store } from './store/store';

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = { store } >
      <Router />
      <div></div>
    </Provider>
  </React.StrictMode>
);
