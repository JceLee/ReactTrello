import { combineReducers } from "redux";
import cardReducer, { cardSaga } from "./card";

import { all } from "redux-saga/effects";

export const rootReducer = combineReducers({
  cardList: cardReducer,
});

export function* rootSaga() {
  yield all([cardSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;
