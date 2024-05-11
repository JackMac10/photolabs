import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import photos from "mocks/photos";



const PhotoList = ({ photos }) => {
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
        />
      ))}
    </ul>
  );
};

export default PhotoList;
