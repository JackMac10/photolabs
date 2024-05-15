import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({photoFaved}) => {

  return (
    <div className='fav-badge'>
      <FavIcon selected={true} displayAlert={photoFaved} />
    </div>
  );
};

export default FavBadge;