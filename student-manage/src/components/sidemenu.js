import React from "react";
import "../index.css";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { id: 1, title: "List All" },
        { id: 2, title: "Add Student" },
        { id: 3, title: "Remove Student" }
      ]
    };
  }
  render() {
    return (
      <div className="sidebar">
        <ul className="list-group list ">
          {this.props.menu.map(menu => (
            <li
              onClick={() => {
                this.props.click(menu);
              }}
              key={menu.id}
              className="list-group-item zoomdetail"
            >
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
