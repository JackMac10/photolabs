import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state: { isModalOpen, currentPhoto, favouritePhotos, photos, topics },
    onPhotoSelect,
    toggleFavouritePhotos,
    onClosePhotoDetailsModal,
    onTopicClick,
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute
        onPhotoItemClick={onPhotoSelect}
        photos={photos}
        topics={topics}
        onToggleFavourite={toggleFavouritePhotos}
        favouritePhotos={favouritePhotos}
        onTopicClick={onTopicClick}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          onClose={onClosePhotoDetailsModal}
          photo={currentPhoto}
          onToggleFavourite={toggleFavouritePhotos}
          favouritePhotos={favouritePhotos}
          onPhotoItemClick={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default App;