import { UserStat } from '../UserStat/UserStat';
import * as S from './style';
import { GithubUser } from '../../types/types';
import { UserTitle } from '../UserTitle/UserTitle';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { UserBio } from '../UserBio/UserBio';
import { UserInfo } from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../Button/Button';
interface UserCardProps extends GithubUser {}

export const UserCard: FC<UserCardProps> = (props: UserCardProps) => {
  const router = useRouter();
  const isDark = useSelector((state: RootState) => state.themeReducer.isDark);
  return (
    <S.Wrapper style={!isDark ? { color: '#697c9a' } : { color: '#fff' }}>
      <S.UserCard>
        <UserAvatar avatar_url={props.avatar_url} login={props.login} />
        <UserTitle
          name={props.name}
          created_at={props.created_at}
          login={props.login}
        />
        <UserBio bio={props.bio} />
        <UserStat
          public_repos={props.public_repos}
          followers={props.followers}
          following={props.following}
        />
        <UserInfo
          blog={props.blog}
          company={props.company}
          location={props.location}
          twitter_username={props.twitter_username}
        />
      </S.UserCard>
      <div style={{ marginLeft: '19rem' }}>
        <Button onClick={() => router.push('http://localhost:3000/')}>
          Сome back
        </Button>
      </div>
    </S.Wrapper>
  );
};
