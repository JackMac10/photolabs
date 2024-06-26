import React from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, photoFaved, onTopicClick}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
      topics={topics} 
      onTopicClick={onTopicClick}
      />
      
      <FavBadge 
      photoFaved={photoFaved}
      />
    </div>
  )
}

export default TopNavigation;
