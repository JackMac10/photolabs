import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setCurrentPhoto(photo);
    setIsModalOpen(true);
  };

  const handleToggleModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute onPhotoItemClick={handlePhotoClick} photos={photos} topics={topics} />
      {isModalOpen && <PhotoDetailsModal onClose={handleToggleModal} photo={currentPhoto} />}
    </div>
  );
};

export default App;
