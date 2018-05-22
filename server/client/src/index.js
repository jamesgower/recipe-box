import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

const App = () => (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
