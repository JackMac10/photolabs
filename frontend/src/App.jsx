import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const handleToggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter(id => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  const handlePhotoClick = (photo) => {
    setCurrentPhoto(photo);
    setIsModalOpen(true);
  };

  const handleToggleModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute onPhotoItemClick={handlePhotoClick} photos={photos} topics={topics} onToggleFavourite={handleToggleFavourite} favouritePhotos={favouritePhotos} />
      {isModalOpen && <PhotoDetailsModal onClose={handleToggleModal} photo={currentPhoto} onToggleFavourite={handleToggleFavourite} favouritePhotos={favouritePhotos} />}
    </div>
  );
};

export default App;
