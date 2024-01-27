import { GithubUser } from '../../types/types';
import * as S from './style';
import { FC } from 'react';
interface UserAvatarProps extends Pick<GithubUser, 'avatar_url' | 'login'> {}

export const UserAvatar: FC<UserAvatarProps> = ({
  avatar_url,
  login
}: UserAvatarProps) => (
  <S.Wrapper>
    <S.Avatar src={avatar_url} alt={login} />
  </S.Wrapper>
);
