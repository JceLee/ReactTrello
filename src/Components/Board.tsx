import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../modules";
import Lane from "./Lane";
import Card from "./Card";

export default function Board() {
  const category = ["Backlog", "Doing", "Done"];

  return (
    <section className="board">
      {category.map((state, index) => (
        <Lane title={state} key={index} />
      ))}
    </section>
  );
}
