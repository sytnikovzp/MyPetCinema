import ACTION_TYPES from './actionTypes';

// Creating
export const createMovieAction = (movie) => {
  return {
    type: ACTION_TYPES.POST_MOVIE_ACTION,
    payload: movie,
  };
};

export const createMovieRequest = () => {
  return {
    type: ACTION_TYPES.POST_MOVIE_REQUEST,
  };
};

export const createMovieSuccess = (movie) => {
  return {
    type: ACTION_TYPES.POST_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const createMovieError = (error) => {
  return {
    type: ACTION_TYPES.POST_MOVIE_ERROR,
    payload: error,
  };
};

// Updating
export const updateMovieAction = (movie) => {
  return {
    type: ACTION_TYPES.PUT_MOVIE_ACTION,
    payload: movie,
  };
};

export const updateMovieRequest = () => {
  return {
    type: ACTION_TYPES.PUT_MOVIE_REQUEST,
  };
};

export const updateMovieSuccess = (movie) => {
  return {
    type: ACTION_TYPES.PUT_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const updateMovieError = (error) => {
  return {
    type: ACTION_TYPES.PUT_MOVIE_ERROR,
    payload: error,
  };
};

// Deleting
export const deleteMovieAction = (id) => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE_ACTION,
    payload: id,
  };
};

export const deleteMovieRequest = () => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE_REQUEST,
  };
};

export const deleteMovieSuccess = (payload) => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE_SUCCESS,
    payload,
  };
};

export const deleteMovieError = (error) => {
  return {
    type: ACTION_TYPES.DELETE_MOVIE_ERROR,
    payload: error,
  };
};

// Getting
export const getMoviesAction = () => {
  return {
    type: ACTION_TYPES.GET_MOVIES_ACTION,
  };
};

export const getMoviesRequest = () => {
  return {
    type: ACTION_TYPES.GET_MOVIES_REQUEST,
  };
};

export const getMoviesSuccess = (movies) => {
  return {
    type: ACTION_TYPES.GET_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const getMoviesError = (error) => {
  return {
    type: ACTION_TYPES.GET_MOVIES_ERROR,
    payload: error,
  };
};

// Other
export const selectMovie = (movie) => {
  return {
    type: ACTION_TYPES.SELECT_MOVIE,
    payload: movie,
  };
};

export const addNewMovie = () => {
  return {
    type: ACTION_TYPES.ADD_NEW_MOVIE,
  };
};
