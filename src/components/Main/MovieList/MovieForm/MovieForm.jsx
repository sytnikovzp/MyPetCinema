import { useDispatch } from 'react-redux';
import { useField } from '../../../../hooks';
import { addMovieAction } from '../../../../store/actions/movieActions';
import './MovieForm.css';

function MovieForm() {
  const title = useField('');
  const director = useField('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title: title.value,
      director: director.value,
      isDone: false,
    };
    dispatch(addMovieAction(newMovie));
    title.onReset();
    director.onReset();
  };

  return (
    <form className='movie-form' onSubmit={onFormSubmit}>
      <input type='text' name='title' {...title} />
      <input type='text' name='director' {...director} />
      <button className='btn'>Add</button>
    </form>
  );
}

export default MovieForm;
