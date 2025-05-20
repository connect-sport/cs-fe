import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setAccountManage: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
    clearAccountManage: () => {
      return {};
    },
  },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
