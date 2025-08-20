import instance from "../instance";

// limit: 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다. (integer)
// offset: 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다. (integer)
// sort: 객체 목록 정렬 기준. "like" 를 전달하면 목록이 총 리액션 수 (reactionCount) 순서대로 목록이 정렬돼서 리턴됩니다. 값을 전달하지 않으면 최신순으로 정렬됩니다. (string)
const getMessages = async ({ recipientId, limit, offset, sort } = {}) => {
  try {
    const { data } = await instance.get(`recipients/${recipientId}/messages/`, { params: { limit, offset, sort } });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getMessages;
