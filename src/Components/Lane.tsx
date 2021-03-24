import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../modules";
import Card from "./Card";
import AddBtn from "./AddBtn";
import AddForm from "./AddForm";

type LaneProps = {
  title: string;
};

export default function Lane(props: LaneProps) {
  const cardList = useSelector((state: RootReducerType) => state.cardList.cardList);

  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const { title } = props;

  const handleButton = () => {
    setIsClicked(!isClicked);
  };

  const drawList = () => {
    return cardList
      .filter((card) => card.state === title)
      .map((card, index) => <Card card={card} key={index} />);
  };

  return (
    <div className="lane">
      <h3 className="laneTitle">{title}</h3>
      {drawList()}
      {isClicked ? (
        <AddForm cardList={cardList} category={title} onClick={handleButton} />
      ) : (
        <AddBtn onClick={handleButton} />
      )}
    </div>
  );
}
