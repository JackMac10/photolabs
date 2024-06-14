import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ id, label, onClick }) => {
  // select Topic based on ID
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
