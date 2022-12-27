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
    addSpend: (state = initialState, { payload }) => {
      state.spend = [
        ... state.spend.filter((item) => item.spendId !== payload.spendId),
        payload,
      ];
      localStorage.setItem("spend", JSON.stringify(state.spend));
    },
    removeSpend: (state = initialState, { payload }) => {
      state.spend = [state.spend.filter((item) => item.spendId !== payload)];

    //   localStorage.setItem("spend", JSON.stringify(state.spend));
    },
  },
});

export const { addSpend, removeSpend } = spendSlice.actions;

export default spendSlice.reducer;
