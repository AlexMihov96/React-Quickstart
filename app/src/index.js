import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './bootstrap.min.css'
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./core/store/reducers/index";

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
)

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
), document.getElementById('root'))
registerServiceWorker()
