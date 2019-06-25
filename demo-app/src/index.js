import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import AddCourse from './components/Addcourse';
import CourseDetails from './components/CourseDetails';
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';


const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink activeStyle={{color:'red'}} exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  activeStyle={{color:'red'}} exact to="/add">Add Course</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color:'red'}} exact to="/courses/4">Course Details</NavLink>
                </li>
            </ul>
        <Route path="/" exact component={App}/>
        <Route path="/add" exact component={AddCourse}/>

        <Route path="/courses/:id" exact render={
            ({match})=>{
                console.log(match);
                return (<CourseDetails selectedCourseId={match.params.id}/>)
                }
            }/>
        </BrowserRouter>
    </Provider>, 
    
    document.getElementById('root'));
