import { SlideShow } from '../slide-show';
import { images } from './main-content.config';
import './MainContent.scss';

/* eslint-disable arrow-body-style */
const MainContent = () => {
  return (
    <div className="main-content">
      <SlideShow images={images} imageCount={images.length} showArrows auto />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* Display Grid Component */}
    </div>
  );
};

export default MainContent;
