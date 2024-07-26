// index.js
import React from 'react';

import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/es/integration/react';

import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
/* Provider is the wrapper for React Redux, then import and add store for Redux to use */
/* BrowserRouter is the wrapper for the react-router which allows for links */
// the persistgate will wrap the app with the redux-persist state
root.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}> 
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  
);
