import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ onClose, photo }) => {
  if (!photo) return null;
console.log(photo)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} />
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
          {Object.values(photo.similar_photos).map((similarPhoto, index) => (
            <PhotoListItem key={index} photo={similarPhoto} onPhotoClick={() => {}} />
          ))}
          </div>

      </div>
    </div>
  );
};

export default PhotoDetailsModal;