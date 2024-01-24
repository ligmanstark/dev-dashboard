import { SearchIcon } from '../../assets/index';
import { useRef } from 'react';
import { Button } from '../Button/Button';
import * as S from './style';

interface SearchProps {
  hasError?: boolean;
  onSubmit: (searchName: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const searchName = searchRef.current?.value || '';
    if (searchName.trim()) {
      onSubmit(searchName);
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
