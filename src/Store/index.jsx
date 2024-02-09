import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "../Sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  reducers, 
  {}, 
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(watcherSaga);

export default store;
