'use client';
import * as S from './style';
import { GithubUsers } from '../../types/types';
import {useRouter} from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetReposQuery } from '../../store/service/reposGithubService';
import { setLogin, setUser } from '../../store/slices/userSlice';
import { useLazyGetUserQuery } from '../../store/service/userGithubService';
export const ItemUsers = ({ login, avatar_url, id }: GithubUsers) => {
  const router = useRouter()
  const [fetchUser] = useLazyGetUserQuery();
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.themeReducer.isDark);
  const loginState = useSelector((state: RootState) => state.userReducer.login);

  const { data = [] } = useGetReposQuery({ login });

  const handleShowProfile = () => {
    if (login)
      fetchUser({ login: login })
        .unwrap()
        .then((response) => {
          dispatch(setUser(response));
          setTimeout(() => {
            router.push(`http://localhost:3000/profile/${response.id}`)
          }, 1000);
        });
  };

  return (
    <>
      <S.Wrapper
        key={id}
        style={
          !isDark
            ? { color: '#697c9a', cursor: 'pointer' }
            : { color: '#fff', cursor: 'pointer' }
        }
        onClick={() => {
          dispatch(setLogin(login));
        }}
      >
        <S.Box onClick={handleShowProfile}>
          <S.SubBox>
            <S.Img src={avatar_url} />
            <S.TextBox>
              <S.H1>{login}</S.H1>
              <S.Text>Repositories:{data.public_repos}</S.Text>
            </S.TextBox>
          </S.SubBox>
        </S.Box>
      </S.Wrapper>
    </>
  );
};
