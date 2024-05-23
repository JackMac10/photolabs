import React from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onPhotoItemClick, onToggleFavourite, favouritePhotos, onTopicClick }) => {

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        photoFaved={favouritePhotos.length > 0}
        onTopicClick={onTopicClick}
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
