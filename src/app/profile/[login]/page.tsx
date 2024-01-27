'use client';
import { GlobalStyles } from '../../../styled/GlobalStyles';
import { Header } from '../../../Layout/Header/Header';
import { Container } from '../../../styled/components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { UserCard } from '../../../components/UserCard/UserCard';

interface Props {
  params: {
    id: string;
  };
}
const Profile = ({ params: { id } }: Props) => {
  const userData = useSelector((state: RootState) => state.userReducer.user);
  console.log(userData);

  return (
    <>
      <GlobalStyles />
      <>
        <Header />
        <UserCard
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          blog={userData.blog}
          company={userData.company}
          created_at={userData.created_at}
          followers={userData.followers}
          following={userData.following}
          id={userData.id}
          location={userData.location}
          login={userData.login}
          name={userData.name}
          public_repos={userData.public_repos}
          twitter_username={userData.twitter_username}
        />
      </>
    </>
  );
};

export default Profile;
