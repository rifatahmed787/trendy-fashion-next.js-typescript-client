import { RootState } from "@/Redux/store";
import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.value;

const searchReducer = searchSlice.reducer;
export default searchReducer;
