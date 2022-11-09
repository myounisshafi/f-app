/* eslint-disable @typescript-eslint/indent */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { createWrapper, HYDRATE } from "next-redux-wrapper";
import productsReducer from "../redux/productSlice";
import toolbarReducer from "../redux/toolbarSlice";
import modalReducer from "../redux/modalSlice";
import userSlice from "../redux/userSlice";
import filtersSlice from "../redux/filtersSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      toolbar: toolbarReducer,
      products: productsReducer,
      modal: modalReducer,
      user: userSlice,
      filters:filtersSlice
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof makeStore>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;

export const wrapper = createWrapper<RootStore>(makeStore);
