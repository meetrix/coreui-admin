/**
 * Created by supun on 09/01/18.
 */
import {SAGA_ACTIONS,TUTOR_ACTIONS} from '../constants/ActionTypes';
import getTutors from '../api/Tutors'
import { put, takeEvery } from 'redux-saga/effects'

function* fetchData (action) {
    console.log("fetchdata")
    try {
        const tutors = yield getTutors()
        yield put({ type: TUTOR_ACTIONS.RECEIVE_TUTORS, tutors })
    } catch (e) {
        console.log(e)
        //yield put({ type: SAGA_ACTIONS.FETCHING_DATA_FAILURE })
    }
}

function* dataSaga () {
    yield takeEvery(TUTOR_ACTIONS.FETCH_TUTORS, fetchData)
}

export default dataSaga