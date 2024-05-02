import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="App">
      <img src={imageSource}/>
        <img src={profile}/>
        <p>{username}</p>
        <p>{location.city}, {location.country}</p>
    </div>
  );
};

export default PhotoListItem;
