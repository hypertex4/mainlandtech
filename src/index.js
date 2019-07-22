import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk";

import './Style.css';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers/index';

import App from './components/App';

ReactDOM.render(
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <BrowserRouter>
            <App>
                <Route path="/" component={App} />
            </App>
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root'));
serviceWorker.unregister();
