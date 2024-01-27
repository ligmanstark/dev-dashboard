import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../types/typesState';

const initialState: UserState = {
  user: [],
  login: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLogin(state, action: PayloadAction<string>) {
      state.login = action.payload;
    }
  }
});

export const { setUser, setLogin } = userSlice.actions;

export default userSlice.reducer;
