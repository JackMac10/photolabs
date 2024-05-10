import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';

//const sampleDataForPhotoListItem = {
//id: "1",
//location: {
//  city: "Montreal",
//    country: "Canada",
//  },
//  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//  username: "Joe Example",
//  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//};

const App = () => (
  <div className="App">
    <TopNavigation/>
    <TopicList/>
    <PhotoList/>
  </div>
);

export default App;