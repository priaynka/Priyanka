import {connect} from 'react-redux';
import Courses from './Courses';
import {bindActionCreators} from 'redux';
import {removeCourse} from '../redux/action';

function mapStateToProps(state){
    return {
      courses:state
    }
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({removeCourse}, dispatch)
  }
  
  
  export const WrapperComponent = connect(mapStateToProps, mapDispatchToProps)(Courses)