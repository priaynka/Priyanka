import React from 'react';
import './App.css';
import  courses from './data/courses';
import { WrapperComponent } from './components/WrapperComponent';

class App extends React.Component {

  constructor(props){ 
    super(props)
    this.state={
      courses :[
        {name:'React',id:1, price:10000, duration:10},
        {name:'Angular',id:2, price:12000, duration:8},
        {name:'Java',id:3, price:15000, duration:20},
        {name:'Spring',id:4, price:20000, duration:12},
        {name:'Hibernate',id:5, price:8000, duration:5}
      ]
    }
    this.handleCourseClick = this.handleCourseClick.bind(this);
  }
  
  handleCourseClick(event){
    console.log('came inside the parent method of handle click ', event.target.id);
  }
  render(){ 
    return (
        <div>
          <WrapperComponent/>
        </div>
    );
  }
}

export default App;