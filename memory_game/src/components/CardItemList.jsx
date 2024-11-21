import { CardItem } from "./CardItem";
import GameData from "../utils/app.mock";
import { useEffect, useState } from "react";

export const CardItemList = () => {
  const [cardList, setCardList] = useState(GameData);
  const [filteredCards, setFilteredCards] = useState([]);

  const onClickHandler = (currentId) => {
    const currentIndex = currentId - 1;
    const currentCard = cardList[currentIndex];

    if (currentCard.isOpen || filteredCards.length >= 2) return;

    setFilteredCards((prev) => [...prev, currentIndex]);
    setCardList((prev) => {
      const updatedCards = [...prev];
      updatedCards[currentIndex].isOpen = true;
      return updatedCards;
    });
  };

  useEffect(() => {
    if (filteredCards.length === 2) {
      const [firstIndex, secondIndex] = filteredCards;

      if (cardList[firstIndex].name === cardList[secondIndex].name) {
        setFilteredCards([]);
      } else {
        const resetCards = () => {
          setCardList((prev) => {
            const updatedCards = [...prev];
            updatedCards[firstIndex].isOpen = false;
            updatedCards[secondIndex].isOpen = false;
            return updatedCards;
          });
          setFilteredCards([]);
        };
        setTimeout(resetCards, 1000);
      }
    }
  }, [filteredCards, cardList]);

  return (
    <div className="card-item-list">
      {cardList.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          image={item.pic}
          onClick={onClickHandler}
          isOpen={item.isOpen}
        />
      ))}
    </div>
  );
};
