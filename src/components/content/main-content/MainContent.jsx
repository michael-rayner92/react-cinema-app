import { useState } from 'react';
import { SlideShow } from '../slide-show';
import { Paginate } from '../paginate';
import { images } from './main-content.config';
import './MainContent.scss';

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = type => {
    setCurrentPage(prevPage => (type === 'prev' ? prevPage - 1 : prevPage + 1));
  };

  return (
    <div className="main-content">
      <SlideShow images={images} imageCount={images.length} showArrows auto />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate paginate={paginate} currentPage={currentPage} totalPages={10} />
        </div>
      </div>
      {/* Display Grid Component */}
    </div>
  );
};

export default MainContent;
