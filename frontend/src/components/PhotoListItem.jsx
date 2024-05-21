import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, isFavorited, onToggleFavourite, onPhotoItemClick, photoId }) => {
  const handleClick = () => {
    onPhotoItemClick(photo);
  };


  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isFavorited={isFavorited}
        photoId={photoId}
        onToggleFavourite={onToggleFavourite}
      />
      <img onClick={handleClick} className="photo-list__image" src={photo.urls.regular} alt={photo.id} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <span>
          <div className="photo-list__user-info">{photo.user.username}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </span>
      </div>
    </div>
  );
};

export default PhotoListItem;
