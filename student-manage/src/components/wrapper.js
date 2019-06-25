import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from "./main";
import AddStudent from "./AddStudent";
import {addStudent} from '../redux/action';
import {removeStudent} from '../redux/action';
import RemoveStudent from './RemoveStudent';
import {showMain} from '../redux/action';
import SideBar from './sidemenu';
// import App from '../App'


function mapStateToProps(data) {
  return { students: data.students,menu: data.menu };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addStudent,removeStudent,showMain }, dispatch);
}
export const WrapperMain = connect(mapStateToProps)(Main);
export const WrapperAddStudent = connect(mapStateToProps,mapDispatchToProps)(AddStudent);
export const WrapperRemoveStudent = connect(mapStateToProps,mapDispatchToProps)(RemoveStudent);
export const WrapperSideBar = connect(mapStateToProps,mapDispatchToProps)(SideBar);
// export const WrapperApp = connect(mapStateToProps,mapDispatchToProps)(App);


