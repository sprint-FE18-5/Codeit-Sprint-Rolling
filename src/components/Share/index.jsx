import icShare from "../../assets/icShare.svg";
import Button from "../Button";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "../Dropdown";

const Share = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="outlinedIcon" size={36} width={56}>
          <img src={icShare} alt="공유하기 버튼 이미지" />
        </Button>
      </DropdownTrigger>
      <div className="w-[140px]">
        <DropdownContent>
          <DropdownItem>카카오톡 공유</DropdownItem>
          <DropdownItem>URL 공유</DropdownItem>
        </DropdownContent>
      </div>
    </Dropdown>
  );
};

export default Share;
