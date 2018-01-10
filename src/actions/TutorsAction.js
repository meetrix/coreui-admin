import {TUTOR_ACTIONS} from '../constants/ActionTypes';
import { put, takeEvery } from 'redux-saga/effects'
// export const getTutors = (tutors) => ({
//     type: TUTOR_ACTIONS.FETCH_TUTORS,
//     tutors
// })


export const receiveTutors = tutors => ({
    type: TUTOR_ACTIONS.RECEIVE_TUTORS,
    tutors
})

export const getTutors = () => ({

    type: TUTOR_ACTIONS.FETCH_TUTORS


})
