import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ favouritePhotos, photos, onToggleFavourite, onPhotoItemClick }) => {
  console.log('photos', photos)
  return (
    <div className="photo-list">
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


