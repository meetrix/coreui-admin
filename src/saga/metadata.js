/**
 * Created by supun on 10/01/18.
 */
import {ACTION_KEY as KEYS, REDUX_ACTIONS as ACTIONS, URLS, HTTP_METHODS, FETCH_KEYS} from '../constants/constant';


let metadata = {};
metadata[KEYS.TUTOR] = {
    url: URLS.TUTOR,
    options: {
        method: HTTP_METHODS.GET
    },
    failureAction: ACTIONS.HANDLE_TUTOR_DATA_FETCH_FAILURE,
    successAction: ACTIONS.SET_TUTOR_DATA
};

export default metadata;