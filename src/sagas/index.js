import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../store/actions/actionTypes';
import {
  getMoviesSaga,
  createMovieSaga,
  updateMovieSaga,
  deleteMovieSaga,
} from './movieSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_CONTACTS_ACTION, getMoviesSaga);
  yield takeLatest(ACTION_TYPES.POST_CONTACT_ACTION, createMovieSaga);
  yield takeLatest(ACTION_TYPES.PUT_CONTACT_ACTION, updateMovieSaga);
  yield takeLatest(ACTION_TYPES.DELETE_CONTACT_ACTION, deleteMovieSaga);
}

export default rootSaga;
