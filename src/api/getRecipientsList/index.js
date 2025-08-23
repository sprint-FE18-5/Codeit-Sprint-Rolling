import instance from "../instance";

/**
 * 롤링 페이퍼 대상 목록 조회
 *
 * @param {Object} options - 옵션 객체
 * @param {number} [options.limit=8] - 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됨
 * @param {number} [options.offset=0] - 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않음
 * @param {string} [options.sort] - 객체 목록 정렬 기준
 *   - "like": 총 리액션 수(`reactionCount`) 순으로 정렬
 *   - 값을 전달하지 않으면 최신순으로 정렬
 *
 * @returns {Promise<Object[]>}
 */
const getRecipientList = async ({ limit, offset, sort } = {}) => {
  try {
    const { data } = await instance.get(`recipients/`, { params: { limit, offset, sort } });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getRecipientList;
