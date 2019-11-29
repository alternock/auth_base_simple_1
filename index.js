import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
//
import _store from '../redux/reducer/_root_reducer';
import App from ".";


let _elemRoot = document.getElementById('root');
let _history = createBrowserHistory;


ReactDOM.render(
    <Provider store={_store}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </Provider>
    , _elemRoot);
