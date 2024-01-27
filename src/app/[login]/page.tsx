// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
'use client';
import { GlobalStyles } from '../../styled/GlobalStyles';
import { Header } from '../../Layout/Header/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { UserCard } from '../../components/UserCard/UserCard';
import { useGetUserQuery } from '../../store/service/userGithubService';
const Profile = () => {
  const loginState = useSelector((state: RootState) => state.userReducer.login);
  const { data = [] } = useGetUserQuery(loginState as string);

  return (
    <>
      <GlobalStyles />
      <>
        <Header />
        <UserCard
          avatar_url={data.avatar_url}
          bio={data.bio}
          blog={data.blog}
          company={data.company}
          created_at={data.created_at}
          followers={data.followers}
          following={data.following}
          id={data.id}
          location={data.location}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          twitter_username={data.twitter_username}
        />
      </>
    </>
  );
};

export default Profile;
