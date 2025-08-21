import instance from "../instance";

const postRecipients = async ({ name, backgroundColor = "beige" } = {}) => {
  try {
    const { data } = await instance.post(`recipients/`, { name, backgroundColor });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default postRecipients;
