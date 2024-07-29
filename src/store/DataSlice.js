import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action) {
      state.data = action.payload;
    },
    asc(state) {
      state.data = state.data.sort((a, b) => a.id - b.id);
    },
    dsc(state) {
      state.data = state.data.sort((a, b) => b.id - a.id);
    },
    nameSort(state, action) {
      if (action.payload.type === "reverse") {
        state.data = state.data.sort((a, b) => {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload.type === "alphabetical") {
        state.data = state.data.sort((a, b) => {
          if (a.firstName > b.firstName) {
            return -1;
          }
          if (a.firstName < b.firstName) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
});

export default dataSlice.reducer;
export const { addData, asc, dsc, nameSort } = dataSlice.actions;
