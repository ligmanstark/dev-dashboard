import { createSlice } from '@reduxjs/toolkit';

interface State {
  id: number | null;
}

const initialState: State = {
  id: null
};

export const idSlice = createSlice({
  name: 'idSlice',
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    }
  }
});

export const { setId } = idSlice.actions;

export default idSlice.reducer;
