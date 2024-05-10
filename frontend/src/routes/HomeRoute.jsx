import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import React from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
