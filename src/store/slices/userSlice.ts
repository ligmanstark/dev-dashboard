import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../types/typesState';

const initialState: UserState = {
  user: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
