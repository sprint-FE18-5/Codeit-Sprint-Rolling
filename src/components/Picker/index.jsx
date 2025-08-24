import EmojiPicker from "emoji-picker-react";
import icEmoji from "../../assets/icEmoji.svg";
import RegularButton from "../Button/RegularButton";
import { useState } from "react";
import postReactions from "../../api/postReactions";
import { useParams } from "react-router-dom";
import getReactions from "../../api/getReactions";
import getRecipients from "../../api/getRecipients";

const Picker = ({ setReactions, setTopReactions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const { id: recipientId } = params;
  const handleClickEmoji = async emojiData => {
    const { emoji } = emojiData;
    await postReactions({ recipientId, emoji, type: "increase" });
    const reactions = await getReactions({ recipientId });
    const recipientData = await getRecipients({ recipientId });
    const { topReactions } = recipientData;
    setReactions(reactions);
    setTopReactions(topReactions);
    setIsOpen(false);
  };
  return (
    <div>
      <RegularButton
        variant="outlinedIcon"
        size={36}
        width=""
        isSquare
        className="w-[36px] md:w-[88px] "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-1 whitespace-nowrap ">
          <img src={icEmoji} alt="이모지 아이콘" />
          <span className="hidden md:block">추가</span>
        </div>
      </RegularButton>
      <div className="absolute left-0 md:left-auto md:right-0 top-11">
        {isOpen && <EmojiPicker height={400} width={320} onEmojiClick={handleClickEmoji} />}
      </div>
    </div>
  );
};

export default Picker;
