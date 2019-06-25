import courses from '../data/courses';
import { removeCourse } from './action';
let rootReducer = function(currentState = courses, action){
    console.log('came inside the root reducer with action ')
    console.log(action);
    switch(action.type){
        case 'REMOVE_COURSE':
                return removeCourseFromArray(action.index, currentState);
        default:
            return currentState        
    }
}

function removeCourseFromArray(index, state){

    return [...state.slice(0, index), ...state.slice(index + 1)];
}

export default rootReducer;
