export const getNewIndex = (type, imageCount, currentIndex) => {
  if (type === 'prev') return currentIndex > 0 ? currentIndex - 1 : imageCount - 1;
  return currentIndex < imageCount - 1 ? currentIndex + 1 : 0;
};

export const getNextIndex = (imageCount, currentIndex) => {
  const lastIndex = currentIndex + 1;
  return lastIndex >= imageCount ? 0 : lastIndex;
};
