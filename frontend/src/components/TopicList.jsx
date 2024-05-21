import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from 'components/TopicListItem';



const TopicList = ({topics}) => {
  return (
    <div>
    <span className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem 
        key={topic.id} 
        label={topic.title} 
        />
      ))}
    </span>
    </div>
  );
};

export default TopicList;
