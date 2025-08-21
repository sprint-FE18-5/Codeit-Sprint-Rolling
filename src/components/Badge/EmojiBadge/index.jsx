const EmojiBadge = ({ reaction }) => {
  const MAX_COUNT = 99;

  return (
    <div className="inline-flex rounded-[32px] px-[8px] md:px-[12px] py-[6px] md:py-[8px] bg-black/54 items-center justify-center gap-[2px] text-white leading-[20px]">
      <span className="font-14-regular md:font-16-regular">{reaction.emoji}</span>
      <span className={reaction.count > MAX_COUNT ? "font-14-regular" : "font-16-regular"}>
        {reaction.count > MAX_COUNT ? `${MAX_COUNT}+` : reaction.count}
      </span>
    </div>
  );
};

export default EmojiBadge;
