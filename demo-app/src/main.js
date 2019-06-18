import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import {Sidebar} from './Sidebar';
import './css/Main.css';

export class Main extends React.Component{
    render(){
        return (
            <div id="container" >
                <Header text="Vervenest Technologies Pvt Ltd"/>
                    <Sidebar/>
                    <Footer/>
                </div>
        );
    }
}