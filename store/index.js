import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

const initalState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initalState,
  applyMiddleware(...middleware)
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
