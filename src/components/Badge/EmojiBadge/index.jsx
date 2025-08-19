const EmojiBadge = ({ reaction }) => {
  return (
    <div className="flex-1 min-w-0 inline-flex rounded-[32px] w-[66px] px-[12px] py-[8px] bg-black/54 items-center justify-center gap-[2px] text-white">
      <span className="text-[14px] md:text-[16px]">{reaction.emoji}</span>
      <span className={reaction.count > 99 ? "text-[12px]" : "text-[14px]"}>
        {reaction.count > 99 ? "99+" : reaction.count}
      </span>
    </div>
  );
};

export default EmojiBadge;
