import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spend: localStorage.getItem("spend")
    ? JSON.parse(localStorage.getItem("spend"))
    : [],
};

const spendSlice = createSlice({
  name: "spend",
  initialState,
  reducers: {
    addSpend: (state, { payload }) => {
      state.spend = [...state.spend, payload];
    },
    removeSpend: (state, { payload }) => {
    state.spend  = [...(state.spend.filter((item)=>item.spendId !== payload))];
    },
  },
});

export const { addSpend, removeSpend } = spendSlice.actions;

export default spendSlice.reducer;
