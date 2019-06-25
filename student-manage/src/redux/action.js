import { data } from "./reducer";

export function addStudent(event) {
  event.preventDefault();
  let newStudent = {
    id: data.students.length + 1,
    name: event.target.name.value,
    grade: event.target.grade.value
  };
  return {
    type: "ADD_STUDENT",
    data: newStudent
  };
}
export function removeStudent(event) {
  event.preventDefault();
  let id = event.target.grade.value;
  return {
    type: "REMOVE_STUDENT",
    data: id
  };
}
export function showMain(data) {
  return {
    type: "SHOW_MAIN",
    data: data
  };
}
