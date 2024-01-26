'use client';
import * as S from './style';
import { useState, useEffect, FC } from 'react';
import { NextPageIcon, PrevPageIcon } from '../../assets/index';

interface Props {
  handlePagination: (page: number, sort: string) => void;
}
export const Pagination: FC<Props> = ({ handlePagination }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 34) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  useEffect(() => {
    handlePagination(currentPage, '');
  }, [currentPage]);

  return (
    <S.Ul>
      <S.Li onClick={handlePrevPage}>
        <PrevPageIcon fillColor={currentPage < 2 ? 'gray' : 'black'} />
      </S.Li>
      <S.Li
        style={{
          marginBottom: '1rem'
        }}
      >
        {currentPage}
      </S.Li>
      <S.Li onClick={handleNextPage}>
        <NextPageIcon fillColor={currentPage > 33 ? 'gray' : 'black'} />
      </S.Li>
    </S.Ul>
  );
};
