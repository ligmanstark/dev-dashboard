import { GithubUsers, GithubUser, GithubRepos } from './types';

export type UsersState = {
  dataUsers: GithubUsers[];
};

export type UserState = {
  user: GithubUser[];
  login?: string;
};

export type ReposState = {
  repos: GithubRepos[];
};
