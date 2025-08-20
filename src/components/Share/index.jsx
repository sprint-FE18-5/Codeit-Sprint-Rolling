import icShare from "../../assets/icShare.svg";
import Button from "../Button";

const Share = () => {
  return (
    <Button variant="outlinedIcon" size={36}>
      <img src={icShare} alt="공유하기 버튼 이미지" />
    </Button>
  );
};

export default Share;
