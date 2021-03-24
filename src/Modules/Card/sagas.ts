import Card from "./type";
import { put, call, takeEvery, select } from "redux-saga/effects";
import { FETCH_CARDS, UPDATE_CARD, DELETE_CARDS, fetchSuccess, fetchFailure } from "./actions";
import {
  getDataBase,
  updateDataBase,
  addCardToDB,
  removeCardFromDB,
} from "../../api/browserStorage";

export function* getCardList() {
  const cardList: Card[] = yield call(() => getDataBase());
  yield put(fetchSuccess(cardList));
}

export function* updateCardFromList() {}

export function* deleteCardFromList() {}

export function* cardSaga() {
  yield takeEvery(FETCH_CARDS, getCardList);
  yield takeEvery(UPDATE_CARD, updateCardFromList);
  yield takeEvery(DELETE_CARDS, deleteCardFromList);
}
