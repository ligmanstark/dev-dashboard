'use client';
import styled from '@emotion/styled';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { Pagination } from '../../components/Pagination/Pagination';
interface Props {
  handlePagination:(page:number,sort:string)=>void
}
export const Footer: FC<Props> = ({ handlePagination }) => {
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
      <Wrapper>
        <Container>
          {/* <button onClick={scrollPageUp}>
 						</button> */}
          <Pagination handlePagination={handlePagination} />
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.footer``;
