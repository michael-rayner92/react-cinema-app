import PropTypes from 'prop-types';
import './SlideShow.scss';

const RenderArrows = ({ onClick }) => {
  const handlePrevClick = () => onClick('prev');
  const handleNextClick = () => onClick('next');

  return (
    <div className="slider-arrows">
      <div
        role="button"
        tabIndex="0"
        className="slider-arrow slider-arrow--left"
        onClick={handlePrevClick}
        onKeyDown={e => e.key === 'Enter' && handlePrevClick()}
      />
      <div
        role="button"
        tabIndex="0"
        className="slider-arrow slider-arrow--right"
        onClick={handleNextClick}
        onKeyDown={e => e.key === 'Enter' && handleNextClick()}
      />
    </div>
  );
};

RenderArrows.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default RenderArrows;
