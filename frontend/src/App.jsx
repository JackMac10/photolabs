import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';


const App = () => (
  <div className="App">
    <HomeRoute photos={photos} topics={topics} />
  </div>
);

export default App;

