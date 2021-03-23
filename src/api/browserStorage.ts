import Card from "../modules/card/type";

export const getCardList = () => {
  const cardList = localStorage.getItem("cardList");
  return cardList ? JSON.parse(cardList) : [];
};

export const updateCardList = (cardList: Card[]) => {
  localStorage.setItem("cardList", JSON.stringify(cardList));
};

export const addScrapCard = (card: Card) => {
  const cardList = getCardList();
  updateCardList([...cardList, card]);
};

export const removeScrapCard = (id: number) => {
  const cardList = getCardList();
  const newCardList = cardList.filter((card: Card) => card.id !== id);

  updateCardList(newCardList);
};
