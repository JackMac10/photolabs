export const fetchPhotosByTopic = async (topicId) => {
  try {
    const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos for the topic');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error.message);
    return null;
  }
};