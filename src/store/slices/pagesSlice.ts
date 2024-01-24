import { createSlice } from '@reduxjs/toolkit';
interface State {
  page: number;
  sort: string;
}
const initialState: State = {
  page: 1,
  sort: 'desc'
};

export const pagesSlice = createSlice({
  name: 'pagesSlice',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    }
  }
});

export const { setPage, setSort } = pagesSlice.actions;

export default pagesSlice.reducer;
