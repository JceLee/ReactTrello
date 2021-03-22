import { combineReducers } from "redux";
import cardReducer, { cardSaga } from "./Card";

import { all } from "redux-saga/effects";

export const rootReducer = combineReducers({
  cardList: cardReducer,
});

export function* rootSaga() {
  yield all([cardSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;