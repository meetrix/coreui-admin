/**
 * Created by supun on 09/01/18.
 */
import {SAGA_ACTIONS,TUTOR_ACTIONS} from '../constants/ActionTypes';
import getTutors from '../api/Tutors'
import { put, takeEvery,call } from 'redux-saga/effects'


function* fetchTutorsAsync (action) {
    try {
        const tutors = yield getTutors();
        yield put({ type: TUTOR_ACTIONS.RECEIVE_TUTORS, tutors })
    }
    catch (e){

    }
}
function* fetchTutors (action) {
    console.log("fetchdata")
    try {
        const tutors = yield getTutors()
        yield put(receiveTutors(tutors ))
    } catch (e) {
        console.log(e)
        //yield put({ type: SAGA_ACTIONS.FETCHING_DATA_FAILURE })
    }
}
function* watchFetchTutors() {
    yield takeEvery(TUTOR_ACTIONS.FETCH_TUTORS, fetchTutorsAsync)
}

function* rootSaga () {
    //yield takeEvery(TUTOR_ACTIONS.FETCH_TUTORS, fetchTutors)
    yield [watchFetchTutors()]
}

export default rootSaga