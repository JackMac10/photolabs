import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from "components/PhotoFavButton";
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ onClose, photo, onToggleFavourite, favouritePhotos, isFavorited, onPhotoItemClick, photoId }) => {
  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-details-modal__content">
      <PhotoFavButton
        isFavorited={favouritePhotos.includes(photo.id)}
        photoId={photoId}
        onToggleFavourite={onToggleFavourite}
        onPhotoItemClick={onPhotoItemClick}
      />

        <img className="photo-details-modal__image" src={photo.urls.full} alt={photo.id} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photo.user.profile} alt={photo.username} />
          <div>
            <div className="photo-details-modal__photographer-info">{photo.user.username}</div>
            <div className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</div>
          </div>
        </div>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(photo.similar_photos)}
            favouritePhotos={favouritePhotos}
            onToggleFavourite={onToggleFavourite}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;