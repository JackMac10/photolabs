import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ favouritePhotos, photos, onToggleFavourite, onPhotoItemClick }) => {

  return (
    <div className="photo-list">
      {/* map through each photo in object */}
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          photoId={photo.id}
          isFavorited={favouritePhotos.includes(photo.id)}
          onToggleFavourite={onToggleFavourite}
          onPhotoItemClick={onPhotoItemClick}
        />
      ))}
    </div>
  );
};

export default PhotoList;


