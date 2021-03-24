import Card from "../modules/card/type";

export const getDataBase = () => {
  const cardList = localStorage.getItem("cardList");
  return cardList ? JSON.parse(cardList) : [];
};

export const updateDataBase = (cardList: Card[]) => {
  localStorage.setItem("cardList", JSON.stringify(cardList));
};

export const addCardToDB = (card: Card) => {
  const cardList = getDataBase();
  updateDataBase([...cardList, card]);
};

export const removeCardFromDB = (id: number) => {
  const cardList = getDataBase();
  const newCardList = cardList.filter((card: Card) => card.id !== id);
  updateDataBase(newCardList);
};
