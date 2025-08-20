import instance from "../instance";

const postReactions = async ({ recipientId, emoji, type } = {}) => {
  try {
    const { data } = await instance.post(`recipients/${recipientId}/reactions/`, { emoji, type });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default postReactions;
