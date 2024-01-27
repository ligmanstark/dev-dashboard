import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 767px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
  }
`;
