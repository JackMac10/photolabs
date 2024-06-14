import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from './TopicListItem';



const TopicList = ({topics, onTopicClick}) => {
  return (
    <div>
    <span className="top-nav-bar__topic-list">
      {/* map through each topic in topics object */}
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
