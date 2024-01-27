'use client';
import * as S from './style';
import { useState, useEffect, FC } from 'react';
import { NextPageIcon, PrevPageIcon } from '../../assets/index';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
interface Props {
  handleFetchUser: (login: string, page: number, sort: string) => void;
}
export const Pagination: FC<Props> = ({ handleFetchUser }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const login = useSelector((state: RootState) => state.pagesReducer.login);
  const isDark = useSelector((state: RootState) => state.themeReducer.isDark);
  const sort = useSelector((state: RootState) => state.pagesReducer.sort);
  const dataUsers = useSelector(
    (state: RootState) => state.usersReducer.dataUsers
  );
  const handleNextPage = () => {
    if (currentPage < 34 && dataUsers.length > 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  useEffect(() => {
    handleFetchUser(login, currentPage, sort);
  }, [currentPage]);

  return (
    <>
      {dataUsers?.length > 1 ? (
        <S.Ul>
          {!isDark ? (
            <S.Li onClick={handlePrevPage}>
              <PrevPageIcon
                fillColor={currentPage < 2 ? 'transparent' : '#697c9a'}
              />
            </S.Li>
          ) : (
            <S.Li onClick={handlePrevPage}>
              <PrevPageIcon
                fillColor={currentPage < 2 ? 'transparent' : '#fff'}
              />
            </S.Li>
          )}

          <S.Li
            style={{
              marginBottom: '1rem'
            }}
          >
            {currentPage}
          </S.Li>
          {!isDark ? (
            <S.Li onClick={handleNextPage}>
              <NextPageIcon
                fillColor={currentPage > 33 ? 'transparent' : '#697c9a'}
              />
            </S.Li>
          ) : (
            <S.Li onClick={handleNextPage}>
              <NextPageIcon
                fillColor={currentPage > 33 ? 'transparent' : '#fff'}
              />
            </S.Li>
          )}
        </S.Ul>
      ) : (
        ''
      )}
    </>
  );
};
