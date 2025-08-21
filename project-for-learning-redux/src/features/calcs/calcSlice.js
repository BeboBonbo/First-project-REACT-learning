import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  result: null,
};
export const calcSlice = createSlice({
  name: "calc",
  initialState: initialState,
  reducers: {
    add: (currentState, action) => {
      const sum =
        Number(action.payload.firstNumber) +
        Number(action.payload.secondNumber);
      currentState.result = sum;
    },

    subtract: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      currentState.result = firstNumber - secondNumber;
    },

    multiple: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      currentState.result = firstNumber * secondNumber;
    },

    divide: (currentState, action) => {
      const { firstNumber, secondNumber } = action.payload;
      currentState.result = firstNumber / secondNumber;
    },
  },
});
export const { add, subtract, multiple, divide } = calcSlice.actions;
export default calcSlice.reducer;
