const EmojiBadge = ({ reaction }) => {
  return (
    <div className="rounded-[32px] w-[66px] px-[12px] py-[8px] bg-[#0000008A] flex justify-center items-center gap-[2px] text-white">
      <span>{reaction.emoji}</span>
      <span>{reaction.count > 99 ? "99+" : reaction.count}</span>
    </div>
  );
};

export default EmojiBadge;
