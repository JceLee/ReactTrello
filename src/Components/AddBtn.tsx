import React, { MouseEventHandler } from "react";

type AddBtnProps = {
  onClick: MouseEventHandler;
};

export default function AddBtn(props: AddBtnProps) {
  return (
    <button className="addBtn" onClick={props.onClick}>
      + Add another card
    </button>
  );
}
