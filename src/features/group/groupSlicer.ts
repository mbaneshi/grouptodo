import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  title: "clean",
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      console.log("setGroup hitted");
      console.log("action.payload is ", action.payload);
      state = action.payload;
      console.log(state);
    },
  },
});

export const { setGroup } = groupSlice.actions;

export default groupSlice.reducer;
