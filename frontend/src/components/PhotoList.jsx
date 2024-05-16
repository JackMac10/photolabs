import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, onToggleFavourite, onPhotoItemClick }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorited={false} // Assuming isFavorited is determined elsewhere
          onToggleFavourite={() => onToggleFavourite(photo.id)}
          onPhotoItemClick={onPhotoItemClick}
        />
      ))}
    </div>
  );
};

export default PhotoList;

