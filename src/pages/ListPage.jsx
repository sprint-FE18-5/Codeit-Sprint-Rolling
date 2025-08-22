import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getRecipientsList from "../api/getRecipientsList";
import CardList from "../components/CardList";
import CardCarousel from "../components/CardCarousel";
import RegularButton from "../components/Button/RegularButton";
import useToast from "../hooks/useToast";
import COLOR_OPTION from "../constants/COLOR_OPTION";

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
        console.log(popularRecipientsList);
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
        <CardCarousel>{CardItems(popularListItem)}</CardCarousel>
      </div>
      <div className="list-recent  lg:w-[1160px] mx-auto mt-[50px]">
        <h2 className="font-24-bold mb-[16px]">최근에 만든 롤링 페이퍼 ⭐️</h2>
        <CardCarousel>{CardItems(recentListItem)}</CardCarousel>
      </div>
      <RegularButton size={56} width="280px" className="mx-auto my-[64px]" onClick={handleBtnClick}>
        나도 만들어보기
      </RegularButton>
    </div>
  );
};

export default ListPage;
