import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onPhotoItemClick, onToggleFavourite, favouritePhotos }) => {



  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        photoFaved={favouritePhotos.length > 0}
      />

      <PhotoList
        photos={photos}
        favouritePhotos={favouritePhotos}
        onToggleFavourite={onToggleFavourite}
        onPhotoItemClick={onPhotoItemClick}
      />
    </div>
  );
};

export default HomeRoute;

