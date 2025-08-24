import { originInstance } from "../instance";

const getBackgroundImages = async () => {
  try {
    const { data } = await originInstance.get("background-images/");
    return data.imageUrls;
  } catch (error) {
    console.error(error);
  }
};

export default getBackgroundImages;
