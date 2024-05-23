import { useReducer, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_TOPIC_PHOTOS: 'SET_TOPIC_PHOTOS', // New action for setting topic photos
};

const initialState = {
  isModalOpen: false,
  currentPhoto: null,
  favouritePhotos: [],
  photos,
  topics,
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
      const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_TOPIC_PHOTOS, payload: { photos: data } });
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return {
    state,
    onPhotoSelect: handlePhotoClick,
    toggleFavouritePhotos: handleToggleFavourite,
    onClosePhotoDetailsModal: handleToggleModal,
    onTopicClick: fetchPhotosByTopic, // New handler for fetching photos by topic
  };
};

export default useApplicationData;