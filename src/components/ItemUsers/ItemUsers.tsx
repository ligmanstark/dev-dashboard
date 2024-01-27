import * as S from './style';
import { GithubUsers } from '../../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetReposQuery } from '../../store/service/reposGithubService';
export const ItemUsers = ({ login, avatar_url, id }: GithubUsers) => {
  const isDark = useSelector((state: RootState) => state.themeReducer.isDark);
  const { data = [] } = useGetReposQuery({ login });
  return (
    <>
      <S.Wrapper
        key={id}
        style={
          !isDark
            ? { color: '#697c9a', cursor: 'pointer' }
            : { color: '#fff', cursor: 'pointer' }
        }
      >
        <S.Box>
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
