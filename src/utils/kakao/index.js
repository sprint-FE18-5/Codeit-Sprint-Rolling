const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_JS_KEY;
const VITE_KAKAO_TEMPLATE_ID = import.meta.env.VITE_KAKAO_TEMPLATE_ID;

const initKakao = () => {
  const { Kakao } = window;
  if (Kakao.isInitialized()) {
    return;
  }
  Kakao.init(KAKAO_JS_KEY);
};

// 공유 함수 호출: 카카오톡 공유 버튼을 띄우려는 위치에서 아래 함수 중 하나를 사용하여 메시지를 공유합니다. 구현 방식 선택을 참고합니다.
// Kakao.Share.sendDefault(): 직접 만든 버튼(커스텀 버튼)에서 사용하는 경우
// 템플릿 객체 전달: sendDefault() 호출 시, 앞서 구성한 템플릿 객체를 전달합니다.

const shareRollingPaperByKakaoTalk = ({ name, messages, recipientId }) => {
  const { Kakao } = window;
  Kakao.Share.sendCustom({
    templateId: Number(VITE_KAKAO_TEMPLATE_ID),
    templateArgs: {
      name,
      recipientId,
      sender: messages[0]?.sender ?? "",
      content: messages[0]?.content ?? "",
      profileImageURL: messages[0]?.profileImageURL ?? "",
    },
    installTalk: true,
  });
};

export { initKakao, shareRollingPaperByKakaoTalk };
