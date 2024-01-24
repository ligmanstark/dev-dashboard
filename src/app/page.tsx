'use client';
import { useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
import { Search } from '../components/Search/Search';
import {
  useLazyGetUserQuery,
  useLazyGetUsersQuery,
  useGetUsersQuery
} from '../store/service/userGithubService';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store/slices/usersSlice';
import { setUser } from '../store/slices/userSlice';
const Home = () => {
  const dispatch = useDispatch();
  const { data = [] } = useGetUsersQuery(2);
    const [fetchUsers] = useLazyGetUsersQuery();

  const [fetchUser] = useLazyGetUserQuery();

  const handleFetchUser = (login: string) => {
    fetchUser(login)
      .unwrap()
      .then((response) => dispatch(setUser(response)));
  };

  useEffect(() => {
    dispatch(setUsers(data));
    console.log(data);
  });

  return (
    <main>
      <GlobalStyles />
      <>
        <Header />
        <Container>
          <Search onSubmit={handleFetchUser} />
        </Container>
        <Footer />
      </>
    </main>
  );
};

export default Home;
