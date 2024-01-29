'use client';
import { SearchIcon } from '../../assets/index';
import { useRef, useState } from 'react';
import { Button } from '../Button/Button';
import * as S from './style';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../store/slices/pagesSlice';
import { RootState } from '../../store/store';
import { Down, Up } from '../../assets/index';
import { useLazyGetUsersQuery } from '../../store/service/userGithubService';
import { setUsers } from '../../store/slices/usersSlice';
interface SearchProps {
  hasError?: boolean;
  onSubmit: (login: string, page: number, sort: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const [isDown, setDown] = useState(false);
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pagesReducer.page);
  const sort = useSelector((state: RootState) => state.pagesReducer.sort);
  const login = useSelector((state: RootState) => state.pagesReducer.login);
  const isDark = useSelector((state: RootState) => state.themeReducer.isDark);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [fetchUsers] = useLazyGetUsersQuery();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const login = searchRef.current?.value || '';
    if (login.trim()) {
      onSubmit(login, page, sort);
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
  };

  const handleSort = () => {
    if (isDown) {
      dispatch(setSort('desc'));
      fetchUsers({ login: login, page: page, sort: 'desc' })
        .unwrap()
        .then((response) => {
          dispatch(setUsers(response));
          setDown(false);
        })
        .catch((error) => {
          alert(error);
          console.log(error.data.message);
        });
    } else if (!isDown) {
      dispatch(setSort('asc'));
      fetchUsers({ login: login, page: page, sort: 'asc' })
        .unwrap()
        .then((response) => {
          dispatch(setUsers(response));
          setDown(true);
        })
        .catch((error) => {
          alert(error);
          console.log(error.data.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Search>
          <label htmlFor="search" style={{ cursor: 'pointer' }}>
            <SearchIcon />
          </label>
          <S.TextField
            type="text"
            ref={searchRef}
            id="search"
            name="username"
            placeholder="Search github username..."
          />
          {hasError && <S.Error>No resault</S.Error>}
          <Button>Search</Button>
        </S.Search>
        <S.SortBox
          onClick={handleSort}
          style={!isDark ? { color: '#697c9a' } : { color: '#fff' }}
        >
          <p>Sort:</p>
          {isDown ? (
            <Down fillColor={isDark ? '#fff' : '#697c9a'} />
          ) : (
            <Up fillColor={isDark ? '#fff' : '#697c9a'} />
          )}
        </S.SortBox>
      </S.Wrapper>
    </form>
  );
};
