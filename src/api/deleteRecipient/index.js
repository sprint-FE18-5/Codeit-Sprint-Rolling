import instance from "../instance";

const deleteRecipient = async ({ recipientId }) => {
  try {
    const response = await instance.delete(`/recipients/${recipientId}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default deleteRecipient;
