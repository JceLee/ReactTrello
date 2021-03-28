import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCards } from "../modules/card/actions";
import Card from "../modules/card/type";
import { updateCardFromDB } from "../api/browserStorage";

type ModalProps = {
  card: Card;
  onClick: Function;
};

export default function EditTool(props: ModalProps) {
  const { id, content, state } = props.card;
  const [newContent, setNewContent] = useState<string>(content);
  const [newState, setNewState] = useState<string>(state);

  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (content !== newContent || state !== newState) {
      updateCardFromDB({
        id: id,
        content: newContent,
        state: newState,
      });
    }
    dispatch(fetchCards());
    props.onClick();
  };

  const onChangeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setNewContent(e.currentTarget.value);
  };

  return (
    <div className="editTool">
      <textarea className="inputBox" defaultValue={newContent} onChange={onChangeHandler} />
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
