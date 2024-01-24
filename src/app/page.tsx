'use client';
import { useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
import { Search } from '../components/Search/Search';
import { Pagination } from '../components/Pagination/Pagination';
import {
  useLazyGetUserQuery,
  useLazyGetUsersQuery,
  useGetUsersQuery
} from '../store/service/userGithubService';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../store/slices/usersSlice';
import { setUser } from '../store/slices/userSlice';
import { setPage, setSort } from '../store/slices/pagesSlice';
import { RootState } from '../store/store';
const Home = () => {
  const dispatch = useDispatch();
  const prevPage = useSelector((state: RootState) => state.pagesReducer.page);
  const prevSort = useSelector((state: RootState) => state.pagesReducer.sort);

  const { data = [] } = useGetUsersQuery({ page: 1, sort: 'desc' });
  const [fetchUsers] = useLazyGetUsersQuery();

  const [fetchUser] = useLazyGetUserQuery();

  const handleFetchUser = (login: string) => {
    fetchUser(login)
      .unwrap()
      .then((response) => dispatch(setUser(response)));
  };

  const handlePagination = (page: number, sort: string) => {
    fetchUsers({ page: page, sort: sort })
      .unwrap()
      .then((response) => {
        if (page !== prevPage) {
          dispatch(setPage(page));
        }
        if (sort !== prevSort && sort !== '') {
          dispatch(setSort(sort));
        }
        dispatch(setUsers(response));
      });
  };

  useEffect(() => {
    dispatch(setUsers(data));
    console.log(data);
  });

  return (
    <>
      <main>
        {/* materialize-css */}
        <GlobalStyles />
        <>
          <Header />
          <Container>
            <Search onSubmit={handleFetchUser} />
            <Pagination/>
          </Container>
          <Footer />
        </>
      </main>
    </>
  );
};

export default Home;
