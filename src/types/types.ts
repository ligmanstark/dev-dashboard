export type LocalGithubUser = {
  login: string;
  avatar: string;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  bio: string;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  created: string;
};
export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};

export type GithubRepos = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type LocalGithubRepos = {
  id: number;
  name: string;
  description: string;
  created: string;
  pushed: string;
  language: string;
};

export type GithubUsers = {
  id: number;
  login: string;
  avatar_url: string;
  followers_url: string;
  repos_url: string;
  organizations_url: string;
};

export type LocalGithubUsers = {
  id: number;
  login: string;
  avatar: string;
  followers: string;
  repos: string;
};
