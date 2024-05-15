import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";




const PhotoList = ({ photos, onToggleFavourite }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
          onToggleFavourite={() => onToggleFavourite(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
