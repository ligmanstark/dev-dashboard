import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/consts';
import { GithubUsers, GithubUser } from '../../types/types';

export const userGithubApi = createApi({
  reducerPath: 'userGithubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<GithubUsers[], number>({
      query: (page) => ({
        url: `search/users?q=Q&page=${page}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    }),
    getUser: builder.query<GithubUser[], string>({
      query: (login) => ({
        url: `/users/${login}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    })
  })
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useGetUsersQuery,
  useLazyGetUsersQuery
} = userGithubApi;
