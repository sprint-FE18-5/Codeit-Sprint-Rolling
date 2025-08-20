import EmojiPicker from "emoji-picker-react";
import icEmoji from "../../assets/icEmoji.svg";
import Button from "../Button";
import { useState } from "react";
import postReactions from "../../api/postReactions";
import { useParams } from "react-router";
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
    <div className="relative">
      <Button variant="outlinedIcon" size={36} width={88} onClick={() => setIsOpen(!isOpen)}>
        <div className="flex gap-1 whitespace-nowrap ">
          <img src={icEmoji} alt="이모지 아이콘" />
          <span className="">추가</span>
        </div>
      </Button>
      <div className="absolute top-11">{isOpen && <EmojiPicker height={400} onEmojiClick={handleClickEmoji} />}</div>
    </div>
  );
};

export default Picker;
