import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReposState } from '../../types/typesState';

const initialState: ReposState = {
  repos: []
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setRepos(state, action: PayloadAction<[]>) {
      state.repos = action.payload;
    }
  }
});

export const { setRepos } = reposSlice.actions;

export default reposSlice.reducer;
