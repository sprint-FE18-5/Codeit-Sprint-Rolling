// import Badge from "./Badge/Badge";
// import CircleButton from "./Button/Button";

import icDelete from "../../assets/icDelete.svg"; // 휴지통 아이콘 import

// 임시 Badge 컴포넌트
const Badge = ({ text, badgeColor = "bg-violet-100 text-violet-500" }) => (
  <span className={`inline-block ${badgeColor} text-xs px-2 py-0.5 rounded-lg mt-0.5`}>{text}</span>
);

// 임시 Button 컴포넌트 (+버튼)
const CircleButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full border-none bg-gray-500 shadow-sm flex items-center justify-center text-3xl text-white cursor-pointer"
    aria-label="추가"
    type="button"
  >
    +
  </button>
);

// Card 컴포넌트
const Card = ({ profileImg, name, badgeText, badgeColor, message = "", date = "", onDelete, onClick, cardID }) => {
  // 삭제 버튼 핸들러
  const handleClickDelete = e => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(cardID);
    }
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-sm p-6 card-size flex flex-col gap-4 relative cursor-pointer transition-all"
      onClick={onClick} // 모달을 위한 핸들러
    >
      <div className="flex items-center gap-3">
        <img src={profileImg} alt={name} className="w-14 h-14 rounded-full object-cover border border-gray-200" />
        <div>
          <div>
            <span className="md:text-[20px] text-[18px] font-normal">From.</span>
            <span className="md:text-[20px] text-[16px] font-bold ml-1">{name}</span>
          </div>
          <Badge text={badgeText} badgeColor={badgeColor} />
        </div>
        {onDelete && (
          <button
            onClick={handleClickDelete}
            className="absolute top-6 right-6 bg-white border border-gray-200 flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer"
            aria-label="삭제"
            type="button"
          >
            <img src={icDelete} alt="삭제" className="w-[16px] h-[16px]" />
          </button>
        )}
      </div>
      <div className="md:text-[18px] text-[15px] text-gray-700 pt-2 border-t border-gray-200 line-clamp-3">
        {message}
      </div>
      <div className="text-xs text-gray-400 mt-auto">{date}</div>
    </div>
  );
};

// +카드 컴포넌트
const AddCard = ({ onClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm card-size flex items-center justify-center transition-all">
      <CircleButton onClick={onClick} />
    </div>
  );
};

export { Card, Badge, CircleButton, AddCard };
