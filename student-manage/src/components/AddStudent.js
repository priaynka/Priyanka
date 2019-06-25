import React from "react";

export default class AddStudent extends React.Component {
  render() {
    return (
      <div>
        <h1>Add</h1>
        <form
          onSubmit={event => {
            // this.props.click(event);
            this.props.addStudent(event);
          }}
        >
          <div className="form-group container">
            <input
            pattern="[A-Za-z]{3,20}"
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              placeholder="Student Name"
            />
          </div>
          <div className="col-auto my-1">
            <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
              Preference
            </label>
            <select className="custom-select mr-sm-2" id="garde" name="grade">
              <option selected>Choose Grade...</option>
              <option>A+</option>
              <option>A</option>
              <option>B+</option>
              <option>B</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
