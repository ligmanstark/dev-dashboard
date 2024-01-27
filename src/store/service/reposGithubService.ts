import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/consts';
import { GithubRepos } from '../../types/types';
interface SetAttr {
  login: string;
}

export const reposGithubApi = createApi({
  reducerPath: 'reposGithubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getRepos: builder.query<GithubRepos[], SetAttr>({
      query: ({ login }) => ({
        url: `/users/${login}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    })
  })
});

export const { useGetReposQuery, useLazyGetReposQuery } = reposGithubApi;
