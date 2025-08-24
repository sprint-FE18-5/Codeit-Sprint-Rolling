import icShare from "../../assets/icShare.svg";
import useToast from "../../hooks/useToast";
import { initKakao, shareRollingPaperByKakaoTalk } from "../../utils/kakao";
import RegularButton from "../Button/RegularButton";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "../Dropdown";
const Share = ({ name, messages, recipientId }) => {
  const { createToast } = useToast();

  const handleClickShareKaKaoTalk = () => {
    try {
      initKakao();
      shareRollingPaperByKakaoTalk({ name, messages, recipientId });
    } catch (error) {
      createToast({ message: "롤링 페이퍼 공유에 실패하였습니다.", type: "error", bottom: 40, duration: 5000 });
    }
  };

  const handleClickShareURL = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        createToast({ message: "URL이 복사 되었습니다.", type: "success", bottom: 40, duration: 5000 });
      })
      .catch(() => {
        createToast({ message: "URL 복사를 실패했습니다.", type: "error", bottom: 40, duration: 5000 });
      });
  };
  return (
    <Dropdown>
      <DropdownTrigger as="div">
        <RegularButton variant="outlinedIcon" size={36} width="" isSquare className="w-[36px] md:w-[56px]">
          <img src={icShare} alt="공유하기 버튼 이미지" />
        </RegularButton>
      </DropdownTrigger>

      <div className="w-[140px] absolute right-0">
        <DropdownContent>
          <DropdownItem onClick={handleClickShareKaKaoTalk}>카카오톡 공유</DropdownItem>
          <DropdownItem onClick={handleClickShareURL}>URL 공유</DropdownItem>
        </DropdownContent>
      </div>
    </Dropdown>
  );
};

export default Share;
