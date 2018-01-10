/**
 * Created by supun on 09/01/18.
 */
import {SAGA_ACTIONS,TUTOR_ACTIONS} from '../constants/ActionTypes';
import getTutors from '../api/Tutors'
import { put, takeEvery,call } from 'redux-saga/effects'
import * as TutorsAction from './TutorsAction'


function* fetchTutorsAsync (action) {
    try {
        const tutors = yield getTutors();
        yield put(TutorsAction.receiveTutors(tutors))
    }
    catch (e){

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