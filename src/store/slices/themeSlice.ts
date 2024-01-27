import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isDark: boolean;
}

const initialState: State = {
  isDark: false
};

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
