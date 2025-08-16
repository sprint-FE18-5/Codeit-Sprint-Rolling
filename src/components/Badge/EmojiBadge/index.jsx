const EmojiBadge = ({ reaction }) => {
  return (
    <div className="rounded-[32px] w-[66px] px-[12px] py-[8px] bg-[#0000008A] flex justify-center items-center">
      <span className="flex gap-[2px] h-[26px] font-16-regular text-white">
        <p>{reaction.emoji}</p>
        <p>{reaction.count}</p>
      </span>
    </div>
  );
};

export default EmojiBadge;
