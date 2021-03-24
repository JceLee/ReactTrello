import React, { useState } from "react";
import EditTool from "./EditTool";
import Cardtype from "../modules/card/type";

type CardProps = {
  card: Cardtype;
};

export default function Card(props: CardProps) {
  const [modalOn, setModalOn] = useState<Boolean>(false);

  const modalHandler = () => {
    setModalOn(!modalOn);
  };
  return (
    <>
      {!modalOn ? (
        <div className="card" onClick={modalHandler}>
          {props.card.content}
        </div>
      ) : (
        <EditTool card={props.card} onClick={modalHandler} />
      )}
    </>
  );
}
