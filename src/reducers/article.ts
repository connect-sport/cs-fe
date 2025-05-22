import { ArticleDto } from "@/dtos/article";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ArticleState = {
  data: ArticleDto[];
};

const initialState: ArticleState = {
  data: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setDataArticles: (state, action: PayloadAction<{ data: ArticleDto[] }>) => {
      return { ...state, data: action.payload.data };
    },
    clearDataArticles: () => {
      return initialState;
    },
  },
});

export const articleReducer = articleSlice.reducer;
export const articleAction = articleSlice.actions;
