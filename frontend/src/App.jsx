import React, {useState} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleToggleModal = () => {
      setIsModalOpen(prevState => !prevState);
    };

  return (
    <div className="App">
       <HomeRoute onPhotoItemClick={handleToggleModal} photos={photos} topics={topics} />
      {isModalOpen && <PhotoDetailsModal/>}
    </div>
  );
};
export default App;

