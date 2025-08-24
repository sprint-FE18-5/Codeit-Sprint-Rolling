import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getRecipientsList from "../../api/getRecipientsList";
import CardList from "../../components/CardList";
import CardCarousel from "../../components/CardCarousel";
import RegularButton from "../../components/Button/RegularButton";
import useToast from "../../hooks/useToast";
import COLOR_OPTION from "../../constants/COLOR_OPTION";

const SkeletonCardList = () => {
  return (
    <div className="animate-pulse xl:w-[1160px] flex gap-[12px] md:gap-[20px]">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="bg-grayscale-300 rounded-2xl
      w-[208px] h-[232px] min-w-[208px] min-h-[232px]
      md:w-[275px] md:h-[260px] md:min-w-[208px] md:min-h-[232px]"
        ></div>
      ))}
    </div>
  );
};

const CardItems = cards => {
  return cards.map(item => (
    <CardList
      key={item.id}
      title={item.name}
      recentMessages={item.recentMessages}
      profileCount={item.recentMessages.length}
      cardCount={item.messageCount}
      bgColor={COLOR_OPTION[item.backgroundColor] || COLOR_OPTION["beige"]}
      emojiStats={item.topReactions}
      imgBackground={item.backgroundImageURL}
      toPage={`/post/${item.id}`}
    />
  ));
};

const ListPage = () => {
  const { createToast } = useToast();
  const [isLoading, setIsLoaing] = useState(true);
  const [recentList, setRecentList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(`/post`);
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const recentRecipientsList = await getRecipientsList();
        const popularRecipientsList = await getRecipientsList({ sort: "like" });
        setRecentList(recentRecipientsList);
        setPopularList(popularRecipientsList);
        setIsLoaing(false);
      } catch (error) {
        console.log(error);
        createToast({ message: "데이터를 가져오는 데 실패했습니다.", type: "error", bottom: 40 });
      }
    };
    getList();
  }, []);

  const recentListItem = recentList.results || [];
  const popularListItem = popularList.results || [];

  return (
    <div className="list-page pt-[65px] px-[24px]">
      <div className="list-popular lg:w-[1160px] mx-auto mt-[50px]">
        <h2 className="font-24-bold mb-[16px]">인기 롤링 페이퍼 🔥</h2>
        <CardCarousel>{isLoading ? <SkeletonCardList /> : CardItems(popularListItem)}</CardCarousel>
      </div>
      <div className="list-recent  lg:w-[1160px] mx-auto mt-[50px]">
        <h2 className="font-24-bold mb-[16px]">최근에 만든 롤링 페이퍼 ⭐️</h2>
        <CardCarousel>{isLoading ? <SkeletonCardList /> : CardItems(recentListItem)}</CardCarousel>
      </div>
      <RegularButton size={56} width="" className="w-full lg:w-[280px] mx-auto my-[64px]" onClick={handleBtnClick}>
        나도 만들어보기
      </RegularButton>
    </div>
  );
};

export default ListPage;
