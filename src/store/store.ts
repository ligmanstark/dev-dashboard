import { configureStore } from '@reduxjs/toolkit';

import { userGithubApi } from './service/userGithubService';
import { reposGithubApi } from './service/reposGithubService';

import usersReducer from './slices/usersSlice';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';
import reposReducer from './slices/reposSlice';
import pagesReducer from './slices/pagesSlice';
import themeReducer from './slices/themeSlice';
import idReducer from './slices/idSlice';

export const store = configureStore({
  reducer: {
    [userGithubApi.reducerPath]: userGithubApi.reducer,
    [reposGithubApi.reducerPath]: reposGithubApi.reducer,
    usersReducer: usersReducer,
    userReducer: userReducer,
    modalReducer: modalReducer,
    reposReducer: reposReducer,
    pagesReducer: pagesReducer,
    themeReducer: themeReducer,
    idReducer: idReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userGithubApi.middleware,
      reposGithubApi.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
