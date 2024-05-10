import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ id, location, imageSource, username, profile, topic }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
      <img className="photo-list__image" src={imageSource}/>
      <div>
        <img className="photo-list__user-profile" src={profile}/>
        <p className="photo-list__user-info">{username}</p>
        <p className="photo-list__user-details">{topic}</p>
        <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
    </div>
  );
};

export default PhotoListItem;
