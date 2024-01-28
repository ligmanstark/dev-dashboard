import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/consts';
import { GithubUsers, GithubUser } from '../../types/types';

interface SetAttr {
  login: string;
  page: number;
  sort: string;
}

export const userGithubApi = createApi({
  reducerPath: 'userGithubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<GithubUsers[], SetAttr>({
      query: ({ login, page, sort }) => ({
        url: `search/users?q=${login}&page=${page}&per_page=10&sort=repositories&order=${sort}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    }),
    getUser: builder.query<GithubUser[], string>({
      query: (login) => ({
        url: `users/${login}`,
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
