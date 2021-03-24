import React, { useState } from "react";
import Card from "../modules/card/type";

type ModalProps = {
  card: Card;
  onClick: Function;
};

export default function EditTool(props: ModalProps) {
  const [content, setContent] = useState<string>(props.card.content);
  const onClickHandler = () => {};

  const onChangeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
  };

  return (
    <div className="editTool">
      <textarea className="inputBox" defaultValue={content} onChange={onChangeHandler} />
      <div className="footer">
        <button className="updateBtn" onClick={onClickHandler}>
          Update
        </button>
        <button className="deleteBtn">Delete</button>
        <span className="closeBtn" onClick={() => props.onClick()}>
          &times;
        </span>
      </div>
    </div>
  );
}
