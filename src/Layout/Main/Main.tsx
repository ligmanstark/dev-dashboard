import * as S from './style';
import { ListUsers } from '../../components/ListUsers/ListUsers';
import { FC } from 'react';
export const Main: FC = () => {
  return (
    <S.Wrapper>
      <ListUsers />
    </S.Wrapper>
  );
};
