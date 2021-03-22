import Card from "./type";

export const FETCH_CARDS = "card/FETCH_CARDS" as const;
export const FETCH_SUCCESS = "card/FETCH_SUCCESS" as const;
export const FETCH_FAILURE = "card/FETCH_FAILURE" as const;
export const ADD_CARD = "card/ADD_CARD" as const;
export const UPDATE_CARD = "card/UPDATE_CARD" as const;
export const DELETE_CARDS = "card/DELETE_CARD" as const;

export const fetchCards = () => ({ type: FETCH_CARDS });
export const fetchSuccess = (cardList: Card[]) => ({ type: FETCH_SUCCESS, payload: cardList });
export const fetchFailure = () => ({ type: FETCH_FAILURE });
export const addCard = (cardList: Card[]) => ({ type: ADD_CARD, payload: cardList });
export const updateCard = (cardList: Card[]) => ({ type: UPDATE_CARD, payload: cardList });
export const deleteCard = (cardList: Card[]) => ({ type: DELETE_CARDS, payload: cardList });

export type CardActionType =
  | ReturnType<typeof fetchCards>
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchFailure>
  | ReturnType<typeof addCard>
  | ReturnType<typeof updateCard>
  | ReturnType<typeof deleteCard>;