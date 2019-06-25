import React from 'react';

export default class RemoveStudent extends React.Component{
    render() {
        return (
             <div>
                 <h1>Remove</h1>
                 <form onSubmit={(event)=>this.props.removeStudent(event)}>
            <select class="custom-select mr-sm-2" id="garde" name="grade">
              <option selected>Choose a Student to remove</option>
              {
                  this.props.students.map(student=> <option value={student.id} >{` ID : ${student.id},Name : ${student.name}`}</option>)
              }
            </select>
            <button type="submit" className="btn btn-warning">Remove</button>
            </form>
             </div>
        );
    }
} 