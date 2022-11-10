/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "./store";
import { login } from "../components/api/api";
import { getUserPreference } from "./filtersSlice";

export type UserPreference = {};
export interface UserState {
  isLogging: boolean;
  userToken: string;
  message: string;
  userPreference: UserPreference;
}

const getInitalState = () => {
  if (typeof window !== 'undefined') {
    return {
      isLogging: false,
      userToken: localStorage.getItem('token'),
      message: null,
      userPreference: null,
    };
  } else {
    return {
      isLogging: false,
      userToken: null,
      message: null,
      userPreference: null,
    };
  }

  
};
const initialState: UserState = getInitalState();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogging: (state, action) => {
      state.isLogging = action.payload;
      state.message = null;
    },
    setMessage: (state, action) => {
      state.isLogging = action.payload.isLogging;
      state.message = action.payload.message;
    },
    setUserData: (state, action) => {
      state.isLogging = action.payload.isLogging;
      state.userToken = action.payload.userToken;
      state.message = null;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token',action.payload.userToken)
      } 
    },
    
    logoutUser: (state) => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
      }
      state.userToken = null;
      state.message = null;
    },
  },
});

export const { setIsLogging, logoutUser } = userSlice.actions;

export const loginUser = (phoneNumber: number, password: string) => {
  return async (dispatch, getState) => {
    dispatch(userSlice.actions.setIsLogging(true));
    login(phoneNumber, password)
      .then((loginInfo) => {
        dispatch(
          userSlice.actions.setUserData({
            isLogging: false,
            userToken: loginInfo?.data?.token ?? null,
          })
        );
        dispatch(getUserPreference());
      })
      .catch((error) => {
        dispatch(
          userSlice.actions.setMessage({
            message:
              error?.response?.data?.message ??
              "Something is broken. Please try again later.",
            isLogging: false,
          })
        );
      });
  };
};

export const userState = (state: AppState) => state.user;

export const isUserLoginSelector = (state: AppState) =>
  state.user.userToken != null;
export default userSlice.reducer;
