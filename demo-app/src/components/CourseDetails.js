import React from 'react';

class CourseDetails extends React.Component {
   
    constructor(props){
        super(props);
    }

    render(){
        return(<h1>Course Details {this.props.selectedCourseId}</h1>)
    }
}
export default CourseDetails;
