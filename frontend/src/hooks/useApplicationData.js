import { useState } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const handleToggleFavourite = (photoId) => {
    setFavouritePhotos(prevFavPhotos =>
      prevFavPhotos.includes(photoId)
        ? prevFavPhotos.filter(id => id !== photoId)
        : [...prevFavPhotos, photoId]
    );
  };

  const handlePhotoClick = (photo) => {
    setCurrentPhoto(photo);
    setIsModalOpen(true);
  };

  const handleToggleModal = () => {
    setIsModalOpen(false);
  };

  return {
    state: {
      isModalOpen,
      currentPhoto,
      favouritePhotos,
      photos,
      topics,
    },
    onPhotoSelect: handlePhotoClick,
    updateToFavPhotoIds: handleToggleFavourite,
    onClosePhotoDetailsModal: handleToggleModal,
  };
};

export default useApplicationData;