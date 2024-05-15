import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ id, location, imageSource, username, profile, onToggleFavourite}) => {
 
  return (
    <div className="photo-list__item">
      <PhotoFavButton onToggleFavourite={onToggleFavourite} />
      <img className="photo-list__image" src={imageSource} alt={id}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <span>
        <div className="photo-list__user-info">{username}</div>
        <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </span>
        </div>
    </div>
  );
};

export default PhotoListItem;
