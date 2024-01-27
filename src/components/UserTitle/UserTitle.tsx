import * as S from './style';
import { GithubUser } from '../../types/types';
import { FC } from 'react';
interface UserTitleProps
  extends Pick<GithubUser, 'name' | 'login' | 'created_at'> {}

// const localDate = new Intl.DateTimeFormat('en-GB', {
//   day: 'numeric',
//   month: 'short',
//   year: '2-digit'
// });

export const UserTitle: FC<UserTitleProps> = ({
  name,
  login,
  created_at
}: UserTitleProps) => {
  // const createdDate = localDate.format(new Date(created_at as string));
  return (
    <S.UserTitle>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{created_at}</span>
    </S.UserTitle>
  );
};
