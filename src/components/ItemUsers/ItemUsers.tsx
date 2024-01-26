import * as S from './style';
import { GithubUsers } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {useGetReposQuery  } from '../../store/service/reposGithubService';
export const ItemUsers = ({
  login,
  avatar_url,
  id,
}: GithubUsers) => {
  const isDark = useSelector((state: RootState) => state.themeReducer.isDark);
  const { data = [] } = useGetReposQuery({ login })
  console.log(data);
  return (
    <>
      {!isDark ? (
        <S.Wrapper key={id} style={{ color: '#697c9a' }}>
          <S.Box>
            <S.Img src={avatar_url} />
            <S.H1>{login}</S.H1>
          </S.Box>
        </S.Wrapper>
      ) : (
        <S.Wrapper key={id} style={{ color: '#fff' }}>
          <S.Box>
            <S.Img src={avatar_url} />
              <S.H1>{login}</S.H1>
              <p>{data.length}</p>
           </S.Box>
        </S.Wrapper>
      )}
    </>
  );
};
