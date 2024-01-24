import { GithubUsers, LocalGithubUsers } from '../types/types';

export const extracrLocalUser = (user: GithubUsers): LocalGithubUsers => ({
  id: user.id,
  login: user.login,
  avatar: user.avatar_url,
  followers: user.followers_url,
  repos: user.repos_url
});
