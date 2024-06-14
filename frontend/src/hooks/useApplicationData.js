import { useReducer, useEffect } from 'react';

const API_URL = 'http://localhost:8001/api';


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_TOPIC_PHOTOS: 'SET_TOPIC_PHOTOS', 
};


const initialState = {
  isModalOpen: false,
  currentPhoto: null,
  favouritePhotos: [],
  photos: [],
  topics: [],
};


// Functions to specify how state is updated, returns updated state
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotos: [...state.favouritePhotos, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.filter(id => id !== action.payload.id),
      };
    case ACTIONS.SELECT_PHOTO:
      const photo = state.photos.find(ph => ph.id == action.payload.photo.id)
      return {
        ...state,
        currentPhoto: photo,
        isModalOpen: true,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: action.payload.isModalOpen,
      };
      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          photos: action.payload.photos,
        };
      case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state,
          topics: action.payload.topics,
        };
    case ACTIONS.SET_TOPIC_PHOTOS:
      return {
        ...state,
        photos: action.payload.photos,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

// Custom hook to manage the application state and actions
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect to fetch initial data when the component mounts
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(`${API_URL}/photos`);
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: data } });
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    const fetchTopics = async () => {
      try {
        const response = await fetch(`${API_URL}/topics`);
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: data } });
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };
    fetchPhotos();
    fetchTopics();
  }, []);

  // Function to handle adding or removing photos from favourites
  const handleToggleFavourite = (photoId) => {
    const actionType = state.favouritePhotos.includes(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED;
    dispatch({ type: actionType, payload: { id: photoId } });
  };

  // Function to handle selecting a photo and opening photoDetailModal
  const handlePhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  // closing PhotoDetailModal
  const handleToggleModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: false } });
  };

  // Function to fetch photos by topic
  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await fetch(`${API_URL}/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_TOPIC_PHOTOS, payload: { photos: data } });
    } catch (error) {
      console.error('Error fetching photos by topic:', error);
    }
  };

  //return state and action handler to components
  return {
    state,
    onPhotoSelect: handlePhotoClick,
    toggleFavouritePhotos: handleToggleFavourite,
    onClosePhotoDetailsModal: handleToggleModal,
    onTopicClick: fetchPhotosByTopic,
  };
};

export default useApplicationData;