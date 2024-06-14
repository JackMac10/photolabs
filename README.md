# react-photolabs
The PhotoLabs project is a single page react webpage, disigned to display the work of photograpers and allow users to like post, see more or see similar posts with a similar topic. 

# screenshots

!["Similar Photos"](https://github.com/JackMac10/photolabs/blob/main/docs/Similar%20photos.jpg?raw=true)
!["Topics Toggle"](https://github.com/JackMac10/photolabs/blob/main/docs/Topics.jpg?raw=true)
!["Large Image Veiw"](https://github.com/JackMac10/photolabs/blob/main/docs/large%20veiw.jpg?raw=true)
!["Home page, liked toggle"](https://github.com/JackMac10/photolabs/blob/main/docs/likes%20with%20notification.jpg?raw=true)




Data Fetches with useEffect
Great job on your code! You've done well in implementing the useApplicationData custom hook and using it in your App.jsx file. Your code is clean, well-structured, and easy to follow. Here are some specific points:

frontend/src/App.jsx: You've done a great job here. You've correctly used the state from useApplicationData and passed it to the HomeRoute component. The rendering based on fetched data is also handled correctly.

frontend/src/hooks/useApplicationData.js: Your implementation of the useApplicationData custom hook is good. You've correctly used the useReducer hook to manage your state and actions.

However, the requirement asks for the use of the useEffect hook to fetch photo and topic data from the backend API. It seems like you're fetching the photos by topic in the fetchPhotosByTopic function, but the initial fetching of photo and topic data is missing.

You could add two useEffect hooks, one for fetching photos and another for fetching topics. Here's a simplified example of how you could fetch photos:

useEffect(() => {
  fetch("/api/photos")
    .then((response) => response.json())
    .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
}, []);
Remember to do a similar thing for fetching topics.

Keep up the good work! With a few adjustments, your code will meet all the requirements.

Your input helps us improve our AI.

