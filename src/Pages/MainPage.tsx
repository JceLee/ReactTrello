import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCards } from "../modules/card/actions";
import Header from "../components/Header";
import Board from "../components/Board";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Board />
    </>
  );
}
