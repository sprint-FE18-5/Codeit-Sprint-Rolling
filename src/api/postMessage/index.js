import instance from "../instance";

const postMessage = async ({ recipientId, name: sender, profileImageURL, relationship, content, font } = {}) => {
  try {
    const { data } = await instance.post(`recipients/${recipientId}/messages/`, {
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default postMessage;
