'use client';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { Pagination } from '../../components/Pagination/Pagination';
import * as S from './style';
interface Props {
  handleFetchUser: (login: string, page: number, sort: string) => void;
}
export const Footer: FC<Props> = ({ handleFetchUser }) => {
  // const scrollPageUp = (event: React.MouseEvent<HTMLButtonElement>) => {
  // 	event.preventDefault();
  // 	window.scrollTo({
  // 		top: 0,
  // 		left: 0,
  // 		behavior: 'smooth',
  // 	});
  // };
  return (
    <>
      <S.Wrapper>
        <Container>
          {/* <button onClick={scrollPageUp}>
 						</button> */}
          <Pagination handleFetchUser={handleFetchUser} />
        </Container>
      </S.Wrapper>
    </>
  );
};
