import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './store/reducers/auth.js';
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        {/*<React.StrictMode>*/}
                <App />
        {/*</React.StrictMode>*/}
    </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();

