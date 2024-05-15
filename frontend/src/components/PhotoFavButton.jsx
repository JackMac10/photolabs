import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onToggleFavourite }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(prevState => !prevState);
    onToggleFavourite()
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleToggleSelect}>
      <FavIcon selected={isSelected} />

      </div>
    </div>
  );
}

export default PhotoFavButton;