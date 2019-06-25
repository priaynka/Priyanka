import React from 'react';

class Courses extends React.Component {
   
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('component mounted ....')
        this.props.removeCourse(0);
    }

    render(){
        console.log(this.props);
        return (
            <div>
                {
                    this.props.courses.length > 0 ? (
                        <ul>
                        {
                            this.props.courses.map(course => <li style={{listStyle:'none', padding:'20px', fontSize:'24px',backgroundColor:'tomato', color:'#ffffff', margin:'10px', width:'40%'}} id={course.id}
                                    key={course.id}>{course.name} </li>)
                        }
                        </ul>
                    ): <h1> There are no Courses for Display </h1>
                }
            </div>  
        );
    }
}

export default Courses;