import React from "react";
import "../index.css";

export default class Main extends React.Component {
  
  addStudent(data){
console.log(data)
  }
  render() {
    return (
      <div className="main">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
              {this.props.students.map(student=>
                <tr>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.grade}</td>
              </tr>
                )}
            
          </tbody>
        </table>
      </div>
    );
  }
}
