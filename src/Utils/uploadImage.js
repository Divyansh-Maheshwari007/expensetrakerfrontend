import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";
const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("Upload image response", response.data);
    return response.data; // Inspect this!
  } catch (error) {
    console.error('Error uploading the image:', error.response?.data || error.message);
    throw error;
  }
};


export default uploadImage;
