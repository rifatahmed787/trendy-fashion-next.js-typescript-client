import { RootState } from "@/Redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  totalCost: number;
  finalTotalCost: number;
}

const initialState: CartState = {
  totalCost: 0,
  finalTotalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setTotalCost: (state, action: PayloadAction<number>) => {
      state.totalCost = action.payload;
    },
    setFinalTotalCost: (state, action: PayloadAction<number>) => {
      state.finalTotalCost = action.payload;
    },
  },
});

export const { setTotalCost, setFinalTotalCost } = cartSlice.actions;

export const selectTotalCost = (state: RootState) => state.cart.totalCost;
export const selectFinalTotalCost = (state: RootState) =>
  state.cart.finalTotalCost;

const cartReducer = cartSlice.reducer;
export default cartReducer;
