import PropTypes from 'prop-types';
import './SlideShow.scss';

const getIndicatorClasses = isCurrent => {
  const baseClass = 'slider-navButton';

  if (!isCurrent) return baseClass;
  return `${baseClass} ${baseClass}--active`;
};

const Indicators = ({ currentSlide, images }) => {
  const listIndicators = images.map((_slide, i) => {
    const btnClasses = getIndicatorClasses(i === currentSlide);
    return <button key={i} type="button" className={btnClasses} />;
  });

  return <div className="slider-nav">{listIndicators}</div>;
};

Indicators.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.exact({ url: PropTypes.string.isRequired })).isRequired
};

export default Indicators;
