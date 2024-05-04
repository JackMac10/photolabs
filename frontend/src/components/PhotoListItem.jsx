import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
      <img className="photo-list__photo" src={imageSource}/>
      <div className="details">
        <img className="profile-pic" src={profile}/>
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
        </div>
    </div>
  );
};

export default PhotoListItem;
