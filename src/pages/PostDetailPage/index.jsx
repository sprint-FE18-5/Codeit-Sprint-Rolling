import { useEffect, useState, useCallback, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";
import getMessages from "../../api/getMessages";
import getRecipients from "../../api/getRecipients";
import deleteMessage from "../../api/deleteMessage";
import deleteRecipient from "../../api/deleteRecipient";
import { Card, AddCard } from "../../components/Card";
import Modal from "../../components/Modal/ModalPopup";
import ModalContent from "../../components/Modal/ModalContent";
import RegularButton from "../../components/Button/RegularButton";
import { ToastContext } from "../../components/Toast/ToastProvider";

const MESSAGE_LIMIT = 5;

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { createToast } = useContext(ToastContext);
  const { id: recipientId } = useParams();
  const [messages, setMessages] = useState([]); // 메시지 리스트
  const [recipient, setRecipient] = useState(null); // 수신자 정보
  const [hasMore, setHasMore] = useState(true); // 더 불러올 메시지 여부
  const [offset, setOffset] = useState(0); // 메시지 페이지네이션 오프셋
  const [isDeleteMode, setIsDeleteMode] = useState(false); // 삭제 모드 여부
  const [modalOpen, setModalOpen] = useState(false); // 모달 상태
  const [modalData, setModalData] = useState(null); // 모달 내용
  const [isLoading, setIsLoading] = useState(false); // 메시지 로딩 중 여부

  // 메시지 불러오기
  const fetchMessages = useCallback(async () => {
    if (isLoading) return; // 중복 호출 방지
    setIsLoading(true);
    try {
      const data = await getMessages({ recipientId, limit: MESSAGE_LIMIT, offset });
      if (data?.results?.length) {
        setMessages(prev => [...prev, ...data.results]);
        setHasMore(data.next !== null);
        setOffset(prev => prev + MESSAGE_LIMIT);
      } else {
        setHasMore(false);
      }
    } finally {
      setIsLoading(false);
    }
  }, [recipientId, offset]);

  useEffect(() => {
    // recipientId가 바뀔 때 상태 리셋
    setMessages([]);
    setOffset(0);
    setHasMore(true);

    const fetchRecipient = async () => {
      const data = await getRecipients({ recipientId });
      setRecipient(data);
    };
    fetchRecipient();
    fetchMessages();
  }, [recipientId]);

  // 무한 스크롤: window scroll + debounce 방식( debounce 함수는 lodash에서 가져옴 )
  useEffect(() => {
    if (!hasMore) return;
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      if (scrollY + viewportHeight >= fullHeight - 100) {
        fetchMessages();
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel && handleScroll.cancel();
    };
  }, [hasMore, fetchMessages]);

  // 카드 삭제 핸들러
  const handleDelete = async cardID => {
    try {
      await deleteMessage({ messageId: cardID });
      setMessages(prev => prev.filter(msg => msg.id !== cardID));
      createToast({ message: "카드메시지가 삭제되었습니다.", type: "success" });
    } catch (e) {
      createToast({ message: "삭제 실패", type: "error" });
    }
  };

  // 카드 클릭 핸들러 (모달)
  const handleCardClick = cardID => {
    const card = messages.find(msg => msg.id === cardID);
    if (card) {
      setModalData(card);
      setModalOpen(true);
    }
  };

  // 페이지 삭제 핸들러
  const handleDeletePage = async () => {
    try {
      await deleteRecipient({ recipientId });
      createToast({ message: "페이지가 성공적으로 삭제되었습니다.", type: "success" });
      setTimeout(() => {
        navigate("/list", { replace: true });
      }, 1200);
    } catch (e) {
      createToast({ message: "페이지 삭제에 실패했습니다.", type: "error" });
    }
  };

  // 배경 스타일 동적 적용
  const colorMap = {
    beige: "#FBE2A5",
    purple: "#E2D6FF",
    blue: "#D2EAFF",
    green: "#D2F5C7",
  };

  const isImageBg = !!(recipient && recipient.backgroundImageURL);

  const bgStyle = recipient
    ? recipient.backgroundImageURL
      ? {
          backgroundImage: `url(${recipient.backgroundImageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : recipient.backgroundColor
      ? { backgroundColor: colorMap[recipient.backgroundColor] || "#FBE2A5" }
      : {}
    : {};

  return (
    <div className="min-h-screen pb-10 pt-48" style={bgStyle}>
      {isImageBg && <div className="fixed inset-0 min-h-screen w-full bg-black/50 z-0 pointer-events-none" />}
      <div className="relative">
        <div className="my-container pt-8">
          <div className="md:flex md:justify-end md:mb-4">
            <div className="fixed bottom-6 left-0 flex w-full px-4 justify-between md:static md:justify-end md:w-auto md:px-0 z-40">
              {isDeleteMode && (
                <div className="w-[48%] md:w-auto md:mr-2">
                  <RegularButton
                    width=""
                    className="w-full h-[55px] md:w-[120px] md:h-[40px]"
                    variant="primary"
                    onClick={handleDeletePage}
                  >
                    페이지 삭제
                  </RegularButton>
                </div>
              )}

              <div className={isDeleteMode ? "w-[48%] md:w-auto" : "w-full md:w-auto"}>
                <RegularButton
                  width=""
                  className="w-full h-[55px] md:w-[120px] md:h-[40px]"
                  variant="primary"
                  onClick={() => setIsDeleteMode(v => !v)}
                >
                  {isDeleteMode ? "취소" : "삭제하기"}
                </RegularButton>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 삭제모드 아닐 때 AddCard + 메시지 카드, 삭제모드일 때 메시지 카드만 */}
            {!isDeleteMode && <AddCard id={recipientId} />}
            {messages.map(msg => (
              <Card
                key={msg.id}
                imgProfile={msg.profileImageURL}
                name={msg.sender}
                badgeText={msg.relationship}
                message={msg.content}
                date={msg.createdAt?.slice(0, 10)}
                isDeleteMode={isDeleteMode}
                onDelete={handleDelete}
                onClick={handleCardClick}
                cardID={msg.id}
              />
            ))}
          </div>
          {hasMore && <div className="h-10" />}
        </div>
        <Modal
          isVisible={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setModalData(null);
          }}
        >
          {modalData && (
            <ModalContent
              profileImg={modalData.profileImageURL}
              name={modalData.sender}
              relationship={modalData.relationship}
              message={modalData.content}
              date={modalData.createdAt?.slice(0, 10)}
              onClose={() => {
                setModalOpen(false);
                setModalData(null);
              }}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default PostDetailPage;
