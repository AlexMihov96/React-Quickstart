import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// const store = createStore(
//     combineReducers(reducers),
//     applyMiddleware(thunk)
// )
const store = {}

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>), document.getElementById('root'))
registerServiceWorker()
