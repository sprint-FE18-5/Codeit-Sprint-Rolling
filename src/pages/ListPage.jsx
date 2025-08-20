import { useEffect, useState } from "react";
import getRecipientsList from "../api/getRecipientsList";
import CardList from "../components/CardList";
import useToast from "../hooks/useToast";

const ListPage = () => {
  const { createToast } = useToast();

  const [recentList, setRecentList] = useState([]);
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const recentList = await getRecipientsList();
        const popularList = await getRecipientsList({ sort: "like" });

        setRecentList(recentList);
        setPopularList(popularList);

        console.log(popularList);
        // console.log(recentList);
      } catch (error) {
        console.log(error);
        createToast({ message: "데이터를 가져오는 데 실패했습니다.", type: "error", bottom: 40 });
      }
    };
    getList();
  }, []);

  return (
    <div>
      <div className="list-popular mt-[65px]">
        <h2>인기 롤링 페이퍼</h2>
        <div className="card-slider w-[1160px] flex gap-[20px] overflow-x-auto">
          {popularList.results?.map(item => (
            <div className="card" key={item.id}>
              <CardList
                title={item.name}
                recentMessages={item.recentMessages}
                profileCount={item.recentMessages.length}
                cardCount={item.messageCount}
                bgColor={`bg-${item.backgroundColor}-200`}
                emojiStats={item.topReactions}
                imgBackground={""}
                toPage={`/post/${item.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="list-recent">
        <h2>최근에 만든 롤링 페이퍼</h2>
      </div>
    </div>
  );
};

export default ListPage;
