import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import rootReducer from './redux/reducer';

const store=createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>
        <nav class="navbar navbar-dark bg-dark">
</nav>
<App />
     </Provider>
, document.getElementById('root'));

