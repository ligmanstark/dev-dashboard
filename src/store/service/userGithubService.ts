import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/consts';
import { GithubUsers, GithubUser } from '../../types/types';

export const userGithubApi = createApi({
  reducerPath: 'userGithubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<GithubUsers[], { page: number; sort: string }>({
      query: ({ page, sort }) => ({
        url: `search/users?q=Q&page=${page}&sort=repositories&order=${sort}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    }),
    getUser: builder.query<GithubUser[], { page: number; sort: string; login:string}>({
      query: ({login,page,sort}) => ({
        url: `search/users?q=${login}&page=${page}&sort=repositories&order=${sort}`,
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
