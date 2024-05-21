import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onToggleFavourite, photoId, isFavorited }) {


  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => onToggleFavourite(photoId)}>
        <FavIcon
          selected={isFavorited}
        />

      </div>
    </div>
  );
}

export default PhotoFavButton;