'use client';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { Container } from '../styled/components';
import { Search } from '../components/Search/Search';
import { Main } from '../Layout/Main/Main';
import { useLazyGetUsersQuery } from '../store/service/userGithubService';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../store/slices/usersSlice';
import { setPage, setSort, setLogin } from '../store/slices/pagesSlice';
import { RootState } from '../store/store';
const Home = () => {
  const dispatch = useDispatch();
  const prevPage = useSelector((state: RootState) => state.pagesReducer.page);
  const prevSort = useSelector((state: RootState) => state.pagesReducer.sort);
  const prevLogin = useSelector((state: RootState) => state.pagesReducer.login);

  // const { data = [] } = useGetUsersQuery({
  //   login: prevLogin,
  //   page: prevPage,
  //   sort: prevSort
  // });

  const [fetchUsers] = useLazyGetUsersQuery();

  const handleFetchUser = (login: string, page: number, sort: string) => {
    fetchUsers({ login: login, page: page, sort: sort })
      .unwrap()
      .then((response) => {
        if (page !== prevPage) {
          dispatch(setPage(page));
        }
        if (sort !== prevSort && sort !== '') {
          dispatch(setSort(sort));
        }
        if (login !== prevLogin && login !== '') {
          dispatch(setLogin(login));
        }
        dispatch(setUsers(response));
      })
      .catch((error) => {
        alert(error);
        console.log(error.data.message);
      });
  };

  // useEffect(() => {
  //   dispatch(setUsers(data));
  // }, []);

  return (
    <>
      <main>
        <GlobalStyles />
        <>
          <Header />
          <Container>
            <Search onSubmit={handleFetchUser} />
            <Main />
          </Container>
          <Footer handleFetchUser={handleFetchUser} />
        </>
      </main>
    </>
  );
};

export default Home;
