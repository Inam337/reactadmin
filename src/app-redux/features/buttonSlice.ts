// src/features/button/buttonSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ButtonState {
  isToggled: boolean;
}

const initialState: ButtonState = {
  isToggled: false,
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    toggleButton(state) {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { toggleButton } = buttonSlice.actions;
export default buttonSlice.reducer;
