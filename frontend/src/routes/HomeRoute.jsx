import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onPhotoItemClick }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]); // FAV PHOTOS STATE
 

  const handleToggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter(id => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  }; 
  const photoFaved = favouritePhotos.length > 0;



  return (
    <div className="home-route">
      <TopNavigation topics={topics} photoFaved={photoFaved} />
      <PhotoList photos={photos} onToggleFavourite={handleToggleFavourite} onPhotoItemClick={onPhotoItemClick}/>
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
