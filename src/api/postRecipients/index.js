import instance from "../instance";

const postRecipients = async ({ name, backgroundColor = "beige", backgroundImageURL } = {}) => {
  try {
    const { data } = await instance.post(`recipients/`, { name, backgroundColor, backgroundImageURL });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default postRecipients;
