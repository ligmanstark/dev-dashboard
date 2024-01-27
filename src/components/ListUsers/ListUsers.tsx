import * as S from './style';
import { ItemUsers } from '../ItemUsers/ItemUsers';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
export const ListUsers = () => {
  const usersState = useSelector(
    (state: RootState) => state.usersReducer.dataUsers
  );
  return (
    <S.Wrapper>
      {usersState &&
        usersState.map((user) => (
          <ItemUsers key={user.id} {...user} id={user.id} />
        ))}
    </S.Wrapper>
  );
};
