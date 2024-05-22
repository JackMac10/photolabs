import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state: { isModalOpen, currentPhoto, favouritePhotos, photos, topics },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        onPhotoItemClick={onPhotoSelect}
        photos={photos}
        topics={topics}
        onToggleFavourite={updateToFavPhotoIds}
        favouritePhotos={favouritePhotos}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          onClose={onClosePhotoDetailsModal}
          photo={currentPhoto}
          onToggleFavourite={updateToFavPhotoIds}
          favouritePhotos={favouritePhotos}
        />
      )}
    </div>
  );
};

export default App;