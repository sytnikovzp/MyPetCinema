import { put } from 'redux-saga/effects';
import api from '../api';

import {
  createMovieRequest,
  createMovieSuccess,
  createMovieError,
  updateMovieRequest,
  updateMovieSuccess,
  updateMovieError,
  deleteMovieRequest,
  deleteMovieSuccess,
  deleteMovieError,
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesError,
} from '../store/actions/movieActions';

export function* getMoviesSaga() {
  yield put(getMoviesRequest());
  try {
    const movies = yield api.get('/movies').then(({ data }) => data);
    yield put(getMoviesSuccess(movies));
  } catch (error) {
    yield put(getMoviesError(error));
  }
}

export function* createMovieSaga({ payload }) {
  yield put(createMovieRequest());
  try {
    const newMovie = yield api
      .post('/movies', payload)
      .then(({ data }) => data);
    yield put(createMovieSuccess(newMovie));
  } catch (error) {
    yield put(createMovieError(error));
  }
}

export function* updateMovieSaga({ payload }) {
  yield put(updateMovieRequest());
  try {
    const updatedMovie = yield api
      .put(`/movies/${payload.id}`, payload)
      .then(({ data }) => data);
    yield put(updateMovieSuccess(updatedMovie));
  } catch (error) {
    yield put(updateMovieError(error));
  }
}

export function* deleteMovieSaga({ payload }) {
  yield put(deleteMovieRequest());
  try {
    yield api.delete(`/movies/${payload}`);
    yield put(deleteMovieSuccess(payload));
  } catch (error) {
    yield put(deleteMovieError(error));
  }
}
