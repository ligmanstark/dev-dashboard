// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
'use client';
import * as S from './style';
import { GithubUsers } from '../../types/types';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetReposQuery } from '../../store/service/reposGithubService';
import { setLogin } from '../../store/slices/userSlice';
export const ItemUsers = ({ login, avatar_url, id }: GithubUsers) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.themeReducer.isDark);
  const { data = [], isError } = useGetReposQuery({ login });

  const handleShowProfile = () => {
    if (!isError) {
      setTimeout(() => {
        if (login) router.push(login);
      }, 0);
    } else {
      alert('Превышен лимит запросов');
    }
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
              <>
                {isError ? (
                  'Превышен лимит запросов'
                ) : (
                  <S.Text>Repositories:{data.public_repos}</S.Text>
                )}
              </>
            </S.TextBox>
          </S.SubBox>
        </S.Box>
      </S.Wrapper>
    </>
  );
};
