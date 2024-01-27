import * as S from './style';
import { GithubUser } from '../../types/types';

interface UserTitleProps
  extends Pick<GithubUser, 'name' | 'login' | 'created_at'> {}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});

export const UserTitle = ({ name, login, created_at }: UserTitleProps) => {
  console.log(name);
  // const createdDate = localDate.format(new Date(created_at));
  return (
    <S.UserTitle>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{created_at}</span>
    </S.UserTitle>
  );
};
