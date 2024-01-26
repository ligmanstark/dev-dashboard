import { SearchIcon } from '../../assets/index';
import { useRef } from 'react';
import { Button } from '../Button/Button';
import * as S from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
interface SearchProps {
  hasError?: boolean;
  onSubmit: (login: string, page: number, sort: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const page = useSelector((state: RootState) => state.pagesReducer.page);
  const sort = useSelector((state: RootState) => state.pagesReducer.sort);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const login = searchRef.current?.value || '';
    if (login.trim()) {
      onSubmit(login,page,sort);
      if (searchRef.current) {
        searchRef.current.value = '';
      }
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
      </S.Wrapper>
    </form>
  );
};
