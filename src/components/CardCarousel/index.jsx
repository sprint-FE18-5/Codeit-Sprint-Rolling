import React, { useRef, useState } from "react";
import ArrowButton from "../../components/Button/ArrowButton";

const CardCarousel = ({ children }) => {
  const listRef = useRef();
  const [curIdx, setCurIdx] = useState(0);

  // step = card width + gap
  const CARD_STEP = 275 + 20;
  const VISIBLE_CARD_COUNT = 4;
  const hasControls = children.length > VISIBLE_CARD_COUNT;
  const maxIdx = children.length - VISIBLE_CARD_COUNT;

  const handleClickPrevBtn = () => {
    listRef.current?.scrollBy({ left: -CARD_STEP, behavior: "smooth" });
    setCurIdx(Math.max(curIdx - 1, 0));
  };
  const handleClickNextBtn = () => {
    listRef.current?.scrollBy({ left: CARD_STEP, behavior: "smooth" });
    setCurIdx(Math.min(curIdx + 1, maxIdx));
  };

  return (
    <div className="relative">
      {hasControls && curIdx > 0 && (
        <ArrowButton
          direction="left"
          className="hidden xl:flex absolute z-30 left-0 top-1/2 -translate-1/2"
          aria-label="이전 카드 보기"
          onClick={handleClickPrevBtn}
        />
      )}
      {hasControls && curIdx < maxIdx && (
        <ArrowButton
          direction="right"
          className="hidden xl:flex absolute z-30 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          aria-label="다음 카드 보기"
          onClick={handleClickNextBtn}
        />
      )}
      <ul
        ref={listRef}
        className="carousel-container xl:w-[1160px] flex gap-[12px] md:gap-[20px] overflow-x-auto xl:overflow-x-hidden snap-x snap-mandatory scrollbar-hide"
      >
        {React.Children.map(children, child => (
          <li key={child.key} className="card snap-center md:snap-start">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCarousel;
