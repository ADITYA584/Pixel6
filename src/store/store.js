import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./DataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
