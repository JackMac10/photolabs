import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]); // State to track favourite photos

  const handleToggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter(id => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }

  };
  // const isFavPhotoExist = favouritePhotos.length > 0;
  console.log(favouritePhotos.length)
  console.log(favouritePhotos)

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} onToggleFavourite={handleToggleFavourite} />
      <FavBadge isFavPhotoExist={!!favouritePhotos.length} />
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



// function PhotoFavButton() {
//   const [isSelected, setIsSelected] = useState(false);
//   const [displayAlert, setDisplayAlert] = useState(false);

//   const handleToggleSelect = () => {
//     setIsSelected(prevState => !prevState);
//     setDisplayAlert(prevState => !prevState); // Toggle displayAlert when selecting/unselecting
//   };

//   return (
//     <div className="photo-list__fav-icon">
//       <div className="photo-list__fav-icon-svg" onClick={handleToggleSelect}>
//         <FavIcon selected={isSelected} displayAlert={displayAlert} />
//       </div>
//     </div>
//   );
// }

// export default PhotoFavButton;