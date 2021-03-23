import React, { useState, MouseEventHandler } from "react";

type AddBtnProps = {
  category: string;
  onClick: Function;
};

export default function AddForm(props: AddBtnProps) {
  const [content, setContent] = useState<string>("");

  const onClickHandler = () => {
    if (content !== "") {
      console.log(content);
    }
    props.onClick();
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
