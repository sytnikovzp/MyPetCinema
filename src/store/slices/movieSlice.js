import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { moviesState } from '../../model/initialStates';
import { setStatus, setError } from '../../services/reducerService';
import { MOVIE_SLICE_NAME } from '../../constants';
import api from '../../api';

const initialState = {
  arrMovies: moviesState,
  currentMovie: createEmptyMovie(),
  isFetching: false,
  error: null,
};

export const getMovies = createAsyncThunk(
  `${MOVIE_SLICE_NAME}/getMovies`,
  async function (_, { rejectWithValue }) {
    try {
      const responce = await api.get(`/${MOVIE_SLICE_NAME}`);
      if (responce.status >= 400) {
        throw new Error(`Error status is ${responce.status}`);
      }
      const { data } = responce;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createMovie = createAsyncThunk(
  `${MOVIE_SLICE_NAME}/createMovie`,
  async (movie, { rejectWithValue }) => {
    try {
      const responce = await api.post(`/${MOVIE_SLICE_NAME}`, movie);
      if (responce.status >= 400) {
        throw new Error(
          `Can't create movie. Error status is ${responce.status}`
        );
      }
      const { data } = responce;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateMovie = createAsyncThunk(
  `${MOVIE_SLICE_NAME}/updateMovie`,
  async (movie, { rejectWithValue }) => {
    try {
      const responce = await api.put(`/${MOVIE_SLICE_NAME}/${movie.id}`, movie);
      if (responce.status >= 400) {
        throw new Error(
          `Can't update movie. Error status is ${responce.status}`
        );
      }
      const { data } = responce;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  `${MOVIE_SLICE_NAME}/deleteMovie`,
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const responce = await api.delete(`/${MOVIE_SLICE_NAME}/${id}`);
      if (responce.status >= 400) {
        throw new Error(
          `Can't delete movie. Error status is ${responce.status}`
        );
      }
      dispatch(removeMovie(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

function createEmptyMovie() {
  return {
    id: null,
    movieTitle: '',
    moviePosterURL: '',
    movieLink: '',
    studioName: '',
    movieGenreList: '',
    directorsList: '',
    actorsList: '',
    countryName: '',
    releaseYear: '',
    storyline: '',
  };
}

const movieSlice = createSlice({
  name: MOVIE_SLICE_NAME,
  initialState,
  reducers: {
    selectMovie(state, { payload }) {
      state.currentMovie = payload;
    },

    addNewMovie(state) {
      state.currentMovie = createEmptyMovie();
    },

    removeMovie(state, { payload }) {
      state.arrMovies = [
        ...state.arrMovies.filter((movie) => movie.id !== payload),
      ];
      state.currentMovie = createEmptyMovie();
    },
  },

  extraReducers: (builder) => {
    // Get all
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.error = null;
      state.arrMovies = payload;
      state.currentMovie = createEmptyMovie();
    });
    builder.addCase(getMovies.pending, setStatus);
    builder.addCase(getMovies.rejected, setError);

    // Create
    builder.addCase(createMovie.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.error = null;
      state.arrMovies.push(payload);
      state.currentMovie = createEmptyMovie();
    });
    builder.addCase(createMovie.pending, setStatus);
    builder.addCase(createMovie.rejected, setError);

    // Update
    builder.addCase(updateMovie.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.error = null;
      state.arrMovies = state.arrMovies.map((movie) =>
        movie.id !== payload.id ? movie : payload
      );
    });
    builder.addCase(updateMovie.pending, setStatus);
    builder.addCase(updateMovie.rejected, setError);

    // Delete
    builder.addCase(deleteMovie.pending, setStatus);
    builder.addCase(deleteMovie.rejected, setError);
  },
});

const { actions, reducer } = movieSlice;

export const { selectMovie, addNewMovie, removeMovie } = actions;

export default reducer;
