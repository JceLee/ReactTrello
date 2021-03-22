import { combineReducers } from "redux";
import cardReducer, { cardSaga } from "./Card";

import { all } from "redux-saga/effects";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "trelloCard",
  storage: storage,
  whitelist: ["cardList"],
};

const rootReducer = combineReducers({
  cardList: cardReducer,
});

export function* rootSaga() {
  yield all([cardSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);