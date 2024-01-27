import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface State {
  login: string;
  page: number;
  sort: string;
}
const initialState: State = {
  login: 'a',
  page: 1,
  sort: 'desc'
};

export const pagesSlice = createSlice({
  name: 'pagesSlice',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setLogin(state, action: PayloadAction<string>) {
      state.login = action.payload;
    }
  }
});

export const { setPage, setSort, setLogin } = pagesSlice.actions;

export default pagesSlice.reducer;
