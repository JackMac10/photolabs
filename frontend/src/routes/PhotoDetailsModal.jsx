import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = ({ isFavorited, onClose, photo, onToggleFavourite, favouritePhotos }) => {
  if (!photo) return null;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-details-modal__content">
        <img className="photo-details-modal__image" src={photo.urls.full} alt={photo.id} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photo.user.profile} alt={photo.username} />
          <div>
            <div className="photo-details-modal__photographer-info">{photo.user.username}</div>
            <div className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</div>
          </div>
        </div>
        <div className="photo-details-modal__images">
          {<PhotoList
            photos={Object.values(photo.similar_photos)}
            favouritePhotos={favouritePhotos}
            isFavorited={isFavorited}
            onToggleFavourite={onToggleFavourite}

          />
          }
        </div>

      </div>
    </div>
  );
};

export default PhotoDetailsModal;