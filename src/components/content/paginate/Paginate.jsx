import PropTypes from 'prop-types';
import './Paginate.scss';

const Paginate = ({ paginate, currentPage, totalPages }) => {
  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  const handlePrevClick = () => !prevDisabled && paginate('prev');
  const handleNextClick = () => !nextDisabled && paginate('next');

  return (
    <>
      <span className="pageCount">
        {currentPage} - {totalPages}
      </span>
      <button
        type="button"
        className={`paginate-button ${prevDisabled ? 'disable' : ''}`}
        onClick={handlePrevClick}
        disabled={prevDisabled}
      >
        Prev
      </button>
      <button
        type="button"
        className={`paginate-button ${nextDisabled ? 'disable' : ''}`}
        onClick={handleNextClick}
        disabled={nextDisabled}
      >
        Next
      </button>
    </>
  );
};

Paginate.propTypes = {
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Paginate;
