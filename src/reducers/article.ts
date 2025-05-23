import { ArticleDto, FilteringAricleDto } from "@/dtos/article";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ArticleState = {
  data: ArticleDto[];
  filters: FilteringAricleDto;
};

const initialState: ArticleState = {
  data: [],
  filters: {
    keyword: "",
    address: "",
    levels: [],
  },
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setDataArticles: (state, action: PayloadAction<{ data: ArticleDto[] }>) => {
      return { ...state, data: action.payload.data };
    },
    setFilteringData: (
      state,
      action: PayloadAction<{ data: FilteringAricleDto }>
    ) => {
      return { ...state, filters: action.payload.data };
    },
    clearDataArticles: () => {
      return initialState;
    },
  },
});

export const articleReducer = articleSlice.reducer;
export const articleAction = articleSlice.actions;
