import { createStore, applyMiddleware } from "redux";
import { rootReducer, rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
