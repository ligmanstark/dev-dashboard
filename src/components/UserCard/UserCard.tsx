import { UserStat } from '../UserStat/UserStat';
import * as S from './style';
import { GithubUser } from '../../types/types';
import { UserTitle } from '../UserTitle/UserTitle';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { UserBio } from '../UserBio/UserBio';
import { UserInfo } from '../UserInfo/UserInfo';

interface UserCardProps extends GithubUser {}

export const UserCard = (props: UserCardProps) => {
  console.log(props);
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};
