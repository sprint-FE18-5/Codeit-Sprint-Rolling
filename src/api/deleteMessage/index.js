import axios from "../instance";

// messageId: 삭제할 메시지의 고유 id (integer)
// 해당 id의 메시지를 서버에서 완전히 삭제합니다.
const deleteMessage = async ({ messageId }) => {
  const URL = `/messages/${messageId}/`;
  try {
    const response = await axios.delete(URL);
    return response;
  } catch (error) {
    throw error;
  }
};

export default deleteMessage;
