import Card from "./type";
import { put, call, takeEvery, select } from "redux-saga/effects";
import { FETCH_CARDS, ADD_CARD, UPDATE_CARD, DELETE_CARDS, fetchSuccess, fetchFailure } from "./actions";

export function* getCardList() {
  
}

export function* addCardToList() {
  
}

export function* updateCardFromList() {
  
}

export function* deleteCardFromList() {
  
}

export function* cardSaga() {
  yield takeEvery(FETCH_CARDS, getCardList);
  yield takeEvery(ADD_CARD, addCardToList);
  yield takeEvery(UPDATE_CARD, updateCardFromList);
  yield takeEvery(DELETE_CARDS, deleteCardFromList);
}