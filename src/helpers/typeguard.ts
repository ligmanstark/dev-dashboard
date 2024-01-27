import { GithubUsers, GithubRepos } from '../types/types';

export const isGithubUsers = (user: object): user is GithubUsers =>
  'id' in user;
export const isGithubRepos = (name: object): name is GithubRepos =>
  'id' in name;
