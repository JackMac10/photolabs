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
      return {
        ...state,
        currentPhoto: action.payload.photo,
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

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const handleToggleFavourite = (photoId) => {
    const actionType = state.favouritePhotos.includes(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED;
    dispatch({ type: actionType, payload: { id: photoId } });
  };

  const handlePhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const handleToggleModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: false } });
  };

  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await fetch(`${API_URL}/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_TOPIC_PHOTOS, payload: { photos: data } });
    } catch (error) {
      console.error('Error fetching photos by topic:', error);
    }
  };

  return {
    state,
    onPhotoSelect: handlePhotoClick,
    toggleFavouritePhotos: handleToggleFavourite,
    onClosePhotoDetailsModal: handleToggleModal,
    onTopicClick: fetchPhotosByTopic,
  };
};

export default useApplicationData;