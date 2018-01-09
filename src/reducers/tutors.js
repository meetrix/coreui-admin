/**
 * Created by supun on 08/01/18.
 */
import {TUTOR_ACTIONS} from '../constants/ActionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case TUTOR_ACTIONS.RECEIVE_TUTORS:
            return [
                ...state,
                ...action.tutors
            ]
        default:
            return state;
    }
};
