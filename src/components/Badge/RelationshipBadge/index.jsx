import COLOR_RELATIONSHIP from "../../../constants/COLOR_RELATIONSHIP";

const RelationshipBadge = ({ relationship }) => {
  const { bgColor, textColor } = COLOR_RELATIONSHIP[relationship];

  return (
    <div className={`${bgColor} ${textColor} w-[41px] h-[20px] px-[8px] rounded-[4px] flex`}>
      <span className="font-14-regular w-[25px] h-[20px]">{relationship}</span>
    </div>
  );
};

export default RelationshipBadge;
