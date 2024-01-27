import { GithubUser } from '../../types/types';
import * as S from './style';
import { FC } from 'react';
interface UserBioProps extends Pick<GithubUser, 'bio'> {}

export const UserBio: FC<UserBioProps> = ({ bio }: UserBioProps) => (
  <S.Wrapper>
    <S.Bio style={bio ? { opacity: '' } : { opacity: '0.75' }}>
      {bio ? bio : 'This profile has no bio'}
    </S.Bio>
  </S.Wrapper>
);
