import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({hasFavoritePhotos}) => {

  return (
    <div className='fav-badge'>
      <FavIcon selected={true} displayAlert={hasFavoritePhotos} />
    </div>
  );
};

export default FavBadge;