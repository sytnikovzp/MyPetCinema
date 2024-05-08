import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  selectMovie,
  deleteMovieAction,
} from '../../../../store/actions/movieActions';
import './MovieItem.css';

function MovieItem({ movie }) {
  const dispatch = useDispatch();

  const { id, fName, lName } = movie;

  const onMovieEdit = () => {
    dispatch(selectMovie(movie));
  };

  const onItemDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteMovieAction(id));
  };

  return (
    <div className={'movie-item'} onDoubleClick={onMovieEdit}>
      <p className='content'>
        {fName} {lName}
      </p>
      <span className='delete-btn' onClick={onItemDelete}>
        X
      </span>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default MovieItem;
