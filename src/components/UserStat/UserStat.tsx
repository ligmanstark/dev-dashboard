import { GithubUser } from '../../types/types';
import * as S from './style';
import { FC } from 'react';
export interface UserStatProps
  extends Pick<GithubUser, 'public_repos' | 'followers' | 'following'> {}
export const UserStat: FC<UserStatProps> = ({
  public_repos,
  followers,
  following
}: UserStatProps) => (
  <S.Wrapper>
    <S.UserStat>
      <S.Info>
        <S.Title>Repos</S.Title>
        <S.Num>{public_repos}</S.Num>
      </S.Info>
      <S.Info>
        <S.Title>Following</S.Title>
        <S.Num>{following}</S.Num>
      </S.Info>
      <S.Info>
        <S.Title>Followers</S.Title>
        <S.Num>{followers}</S.Num>
      </S.Info>
    </S.UserStat>
  </S.Wrapper>
);
