import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';



const TopicList = ({topics, onTopicClick}) => {
  return (
    <div>
    <span className="top-nav-bar__topic-list">
      {topics.map((topic) => (
          <TopicListItem
          key={topic.id}
          label={topic.title}
          onClick={() => onTopicClick(topic.id)}
        />
      ))}
    </span>
    </div>
  );
};

export default TopicList;
