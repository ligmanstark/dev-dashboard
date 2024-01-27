import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from '../../types/typesState';

const initialState: UsersState = {
  dataUsers: []
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.dataUsers = action.payload.items;
    }
  }
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
