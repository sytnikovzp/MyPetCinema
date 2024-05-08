import { moviesState } from '../../model/initialStates';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  arrMovies: moviesState,
  currentMovie: createEmptyMovie(),
  isPending: false,
  error: null,
};

export default function moviesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // Success
    case ACTION_TYPES.POST_MOVIE_SUCCESS:
      return {
        ...state,
        arrMovies: [...state.arrMovies, payload],
        currentMovie: createEmptyMovie(),
        isPending: false,
      };

    case ACTION_TYPES.PUT_MOVIE_SUCCESS:
      return {
        ...state,
        arrMovies: [
          ...state.arrMovies.map((movie) =>
            movie.id !== payload.id ? movie : payload
          ),
        ],
        isPending: false,
      };

    case ACTION_TYPES.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        arrMovies: [
          ...state.arrMovies.filter((movie) => movie.id !== payload),
        ],
        currentMovie: createEmptyMovie(),
        isPending: false,
      };

    case ACTION_TYPES.GET_MOVIES_SUCCESS:
      return {
        ...state,
        arrMovies: payload,
        isPending: false,
      };

    // Requesting
    case ACTION_TYPES.POST_MOVIE_REQUEST:
    case ACTION_TYPES.PUT_MOVIE_REQUEST:
    case ACTION_TYPES.DELETE_MOVIE_REQUEST:
    case ACTION_TYPES.GET_MOVIES_REQUEST:
      return {
        ...state,
        isPending: true,
      };

    // Error
    case ACTION_TYPES.POST_MOVIE_ERROR:
    case ACTION_TYPES.PUT_MOVIE_ERROR:
    case ACTION_TYPES.DELETE_MOVIE_ERROR:
    case ACTION_TYPES.GET_MOVIES_ERROR:
      return {
        ...state,
        isPending: false,
        error: payload,
      };

    // Other
    case ACTION_TYPES.SELECT_MOVIE:
      return {
        ...state,
        currentMovie: payload,
      };

    case ACTION_TYPES.ADD_NEW_MOVIE:
      return {
        ...state,
        currentMovie: createEmptyMovie(),
      };

    default:
      return state;
  }
}

function createEmptyMovie() {
  return {
    id: null,
    fName: '',
    lName: '',
    eMail: '',
    cPhone: '',
  };
}
