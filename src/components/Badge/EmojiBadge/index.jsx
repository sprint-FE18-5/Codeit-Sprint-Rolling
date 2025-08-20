const EmojiBadge = ({ reaction }) => {
  return (
    <button className="rounded-[32px] px-[12px] py-[8px] bg-[#0000008A] inline-flex justify-center items-center gap-[2px] text-white">
      <span>{reaction.emoji}</span>
      <span>{reaction.count > 99 ? "99+" : reaction.count}</span>
    </button>
  );
};

export default EmojiBadge;
