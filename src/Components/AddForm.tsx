import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../modules/card/type";
import { addCard } from "../modules/card/actions";
import { addCardToDB } from "../api/browserStorage";

type AddFormProps = {
  cardList: Card[];
  category: string;
  onClick: Function;
};

export default function AddForm(props: AddFormProps) {
  const { cardList, category, onClick } = props;
  const [content, setContent] = useState<string>("");

  const dispatch = useDispatch();

  const createCard = () => {
    const maxId =
      cardList.length !== 0
        ? cardList.reduce((max, card) => (card.id > max ? card.id : max), cardList[0].id)
        : 0;
    return {
      id: (maxId + 1) | 0,
      content: content,
      state: category,
    };
  };

  const onClickHandler = () => {
    if (content !== "") {
      const newCard = createCard();
      console.log(newCard);
      dispatch(addCard(newCard));
      addCardToDB(newCard);
    }
    onClick();
  };

  const onChangeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContent(e.currentTarget.value);
  };

  return (
    <form onSubmit={onClickHandler}>
      <textarea
        className="inputBox"
        placeholder="Enter a title for this card..."
        onChange={onChangeHandler}
      />
      <input className="submitBtn" type="submit" value="Add Card" />
    </form>
  );
}
