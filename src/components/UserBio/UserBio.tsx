import { GithubUser } from '../../types/types';
import styles from './UserBio.module.scss';
import * as S from './style';

interface UserBioProps extends Pick<GithubUser, 'bio'> {}

export const UserBio = ({ bio }: UserBioProps) => (
  <S.Wrapper>
    <S.Bio style={bio ? { opacity: '' } : { opacity: '0.75' }}>
      {bio ? bio : 'This profile has no bio'}
    </S.Bio>
  </S.Wrapper>
);
