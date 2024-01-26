import { GithubRepos, LocalGithubRepos } from '../types/types';

export const extracrLocalUser = (repos: GithubRepos): LocalGithubRepos => ({
  id: repos.id,
  name: repos.name,
  description: repos.description,
  language: repos.language,
  created: repos.created_at,
  pushed: repos.pushed_at
});
