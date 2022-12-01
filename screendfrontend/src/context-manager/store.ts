import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import categoryReducer from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
