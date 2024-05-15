import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const handleToggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter(id => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }

  };
  // const isFavPhotoExist = favouritePhotos.length > 0;
  // console.log(favouritePhotos.length)
  // console.log(hasFavoritePhotos)
  
  const hasFavoritePhotos = favouritePhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} hasFavoritePhotos={hasFavoritePhotos} />
      <PhotoList photos={photos} onToggleFavourite={handleToggleFavourite} />
    </div>
  );
};

export default HomeRoute;


// const likeCounter = () => {
//   const [count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(prev => prev +1)
//   }
//   return {count, increaseCount};
// }
