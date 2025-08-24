import { originInstance } from "../instance";

const getProfileImages = async () => {
  try {
    const { data } = await originInstance.get("profile-images/");
    return data.imageUrls;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getProfileImages;
