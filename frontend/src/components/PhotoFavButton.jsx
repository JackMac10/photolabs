import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isSelected, setIsSelected] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleToggleSelect = () => {
    console.log('liked')
    setIsSelected(prevState => !prevState);
  };

  const handleToggleAlert = () => {
    setDisplayAlert(prevState => !prevState);
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleToggleSelect}>
      <FavIcon selected={isSelected} displayAlert={displayAlert} />

      </div>
    </div>
  );
}

export default PhotoFavButton;