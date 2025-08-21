import instance from "../instance";

const getReactions = async ({ recipientId, limit, offset } = {}) => {
  try {
    const { data } = await instance.get(`recipients/${recipientId}/reactions/`, { params: { limit, offset } });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getReactions;
