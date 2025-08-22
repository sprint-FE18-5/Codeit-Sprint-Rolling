import icShare from "../../assets/icShare.svg";
import useToast from "../../hooks/useToast";
import RegularButton from "../Button/RegularButton";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "../Dropdown";

const Share = () => {
  const { createToast } = useToast();
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
      <DropdownTrigger>
        <RegularButton variant="outlinedIcon" size={36} width={"56px"}>
          <img src={icShare} alt="공유하기 버튼 이미지" />
        </RegularButton>
      </DropdownTrigger>

      <div className="w-[140px] absolute right-0">
        <DropdownContent>
          <DropdownItem>카카오톡 공유</DropdownItem>
          <DropdownItem onClick={handleClickShareURL}>URL 공유</DropdownItem>
        </DropdownContent>
      </div>
    </Dropdown>
  );
};

export default Share;
