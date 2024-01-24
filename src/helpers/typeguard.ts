import { GithubUser, GithubRepos } from '../types/types';

export const isGithubUser = (user: object): user is GithubUser => 'id' in user;
export const isGithubRepos = (name: object): name is GithubRepos =>
  'id' in name;
