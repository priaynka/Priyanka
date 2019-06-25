import React from "react";
import SideBar from "./components/sidemenu";
import {WrapperMain} from './components/wrapper'
import {WrapperAddStudent} from './components/wrapper'
import {WrapperRemoveStudent} from './components/wrapper'
import {WrapperSideBar} from './components/wrapper'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Priya", grade: "A+" },
        { id: 2, name: "Nisha", grade: "A+" },
        { id: 3, name: "Gokul", grade: "A+" },
        { id: 4, name: "Prakash", grade: "A+" }
      ],
      selectedComponent: [
        { id: 1, selected: true },
        { id: 2, selected: false },
        { id: 3, selected: false }
      ]
    };
    this.showComp = this.showComp.bind(this);
  }
  showComp(data) {
    console.log("show comp", data);
    this.setState({
      selectedComponent: this.state.selectedComponent.map(comp => {
        if (comp.id === data.id) {
          comp.selected = true;
          return comp;
        } else {
          comp.selected = false;
          return comp;
        }
      })
    });
  }
  render() {
    return (
      <div>
        <div className="fluid-container">
          <div className="row">
            <div className="col-3">
              <WrapperSideBar click={this.showComp} />
            </div>
            <div className="col-9">
              {this.state.selectedComponent.map(comp => {
                if (comp.selected) {
                  switch (comp.id) {
                    case 1:
                      return <WrapperMain/>;

                    case 2:
                      return <WrapperAddStudent/>

                    case 3:
                      return (
                        <WrapperRemoveStudent
                         
                        />
                      );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
