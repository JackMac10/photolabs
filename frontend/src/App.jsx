import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

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
    {/* {Array.from({ length: 3 }).map((_, index) => (
      <PhotoListItem
        key={index}
        id={sampleDataForPhotoListItem.id}
        location={sampleDataForPhotoListItem.location}
        imageSource={sampleDataForPhotoListItem.imageSource}
        username={sampleDataForPhotoListItem.username}
        profile={sampleDataForPhotoListItem.profile}
      />
    ))} */}
    <PhotoList/>
  </div>
);

export default App;