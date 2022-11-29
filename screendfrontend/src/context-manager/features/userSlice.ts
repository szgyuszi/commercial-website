import { createSlice } from "@reduxjs/toolkit";
import { UserContextInterface } from "../../utils/modal";
import type { RootState } from "../store";

const initialState: UserContextInterface = {
  id: null,
  name: null,
  userImg: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logUserIn: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.userImg = action.payload.userImg;
    },
    logUserOut: (state) => {
      state.id = null;
      state.name = null;
      state.userImg = null;
    },
  },
});

export const { logUserIn, logUserOut } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;
