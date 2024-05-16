import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, photo }) => {
  if (!photo) return null;
  return (
    <div className="photo-details-modal" >
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal__top-bar">
          
        </div>
      <div className="photo-details-modal__content">
        <img className="photo-details-modal__image" src={photo.imageSource} alt={photo.id} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photo.profile} alt={photo.username} />
          <div>
            <div className="photo-details-modal__photographer-info">{photo.username}</div>
            <div className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
