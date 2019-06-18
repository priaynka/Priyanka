import React from 'react';
import ReactDOM from 'react-dom';
import './css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './products/ProductList';

ReactDOM.render(

        <div className="alert alert-danger ">
           <ProductList/> 
        </div>, 
        document.getElementById('root'));
