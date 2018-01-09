import { combineReducers } from 'redux'
import cart from './cart';
import tutors from './tutors'
const rootReducer = combineReducers({
    cart,
    tutors,
});
export default rootReducer;