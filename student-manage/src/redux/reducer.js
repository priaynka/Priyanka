import { removeStudent } from "./action";

export let data = {
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
  ],
  menu: [
    { id: 1, title: "List All" },
    { id: 2, title: "Add Student" },
    { id: 3, title: "Remove Student" }
  ]
};

let rootReducer = function(currentState = data, action) {
  console.log("in reduce js", currentState, action);

  switch (action.type) {
    case "ADD_STUDENT":
      return addStudent(action, currentState);
    case "REMOVE_STUDENT":
      return removeStudents(action, currentState);
    case "SHOW_MAIN":
      return show_Main(action, currentState);

    default:
      return currentState;
  }
};

export default rootReducer;

let addStudent = function(action, state) {
  let newState = state;
  newState.students.push(action.data);
  console.log("add student in reducer", newState);
  return newState;
};

let removeStudents = function(action, state) {
  let newStudent = state.students.filter(student => student.id != action.data);
  let newobj = {
    students: newStudent,
    selectedComponent: state.selectedComponent,
    menu: state.menu
  };
  console.log(newobj);
  return newobj;
};

let show_Main = function(action, state) {
  let newState = state;
  newState = state.selectedComponent.map(element => {
    if (element.id == action.data.id) {
      element.selected = true;
      return element;
    } else {
      element.selected = false;
      return element;
    }
  });
  let newobj = {
    students: state.students,
    selectedComponent:newState,
    menu: state.menu
  };
  console.log(newobj);
  return newobj;
};
