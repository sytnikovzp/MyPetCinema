import ACTION_TYPES from './actionTypes';

// Creating
export const createMovieAction = (movie) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ACTION,
    payload: movie,
  };
};

export const createMovieRequest = () => {
  return {
    type: ACTION_TYPES.POST_CONTACT_REQUEST,
  };
};

export const createMovieSuccess = (movie) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_SUCCESS,
    payload: movie,
  };
};

export const createMovieError = (error) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ERROR,
    payload: error,
  };
};

// Updating
export const updateMovieAction = (movie) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ACTION,
    payload: movie,
  };
};

export const updateMovieRequest = () => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_REQUEST,
  };
};

export const updateMovieSuccess = (movie) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_SUCCESS,
    payload: movie,
  };
};

export const updateMovieError = (error) => {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ERROR,
    payload: error,
  };
};

// Deleting
export const deleteMovieAction = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ACTION,
    payload: id,
  };
};

export const deleteMovieRequest = () => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
  };
};

export const deleteMovieSuccess = (payload) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
    payload,
  };
};

export const deleteMovieError = (error) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ERROR,
    payload: error,
  };
};

// Getting
export const getMoviesAction = () => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ACTION,
  };
};

export const getMoviesRequest = () => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_REQUEST,
  };
};

export const getMoviesSuccess = (movies) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
    payload: movies,
  };
};

export const getMoviesError = (error) => {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ERROR,
    payload: error,
  };
};

// Other
export const selectMovie = (movie) => {
  return {
    type: ACTION_TYPES.SELECT_CONTACT,
    payload: movie,
  };
};

export const addNewMovie = () => {
  return {
    type: ACTION_TYPES.ADD_NEW_CONTACT,
  };
};
