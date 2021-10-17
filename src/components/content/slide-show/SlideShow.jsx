import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Indicators from './Indicators';
import RenderArrows from './RenderArrows';
import { getNextIndex, getNewIndex } from './helpers';
import './SlideShow.scss';

const SlideShow = ({ auto, showArrows, images, imageCount }) => {
  const [state, setState] = useState({ slideIndex: 0, slideShow: images?.[0] || '' });
  const { slideShow, slideIndex } = state;

  const currentSlideIndex = useRef(0);
  const sliderInterval = useRef(0);

  const moveSlideWithArrows = type => {
    const newIndex = getNewIndex(type, imageCount, currentSlideIndex.current);

    setState({ slideIndex: newIndex, slideShow: images[newIndex] });
    currentSlideIndex.current = newIndex;
  };

  useEffect(() => {
    if (auto) {
      const timeInterval = setInterval(() => {
        const newIndex = getNextIndex(imageCount, currentSlideIndex.current + 1);

        setState({ slideIndex: newIndex, slideShow: images[newIndex] });
        currentSlideIndex.current = newIndex;
      }, 5000);

      sliderInterval.current = timeInterval;

      return () => {
        clearInterval(timeInterval);
        sliderInterval.current = 0;
      };
    }
  }, [images, imageCount, auto]);

  return (
    <div className="slider">
      <div className="slider-slides">
        {!!imageCount && slideShow && (
          <div className="slider-image" style={{ backgroundImage: `url(${slideShow.url})` }} />
        )}
      </div>
      {showArrows && <RenderArrows onClick={moveSlideWithArrows} />}
      <Indicators currentSlide={slideIndex} images={images} />
    </div>
  );
};

SlideShow.propTypes = {
  auto: PropTypes.bool.isRequired,
  showArrows: PropTypes.bool.isRequired,
  imageCount: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.exact({ url: PropTypes.string.isRequired })).isRequired
};

export default SlideShow;
