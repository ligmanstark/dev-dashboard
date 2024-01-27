import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const UserCard = styled.div`
  margin: 1.5rem 0 3rem;
  width: 100%;
  padding: 30px 24px 40px;
  background-color: var(--ucard-bg);
  box-shadow: var(--ucard-shadow);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 25px 20px;

  & > *:nth-child(n + 3) {
    grid-column: 1 / span 2;
  }

  @media (min-width: 767px) {
    grid-template-columns: 120px 1fr;
    padding: 40px;
    gap: 30px 40px;
  }

  @media (min-width: 1024px) {
    gap: 30px 40px;

    & > *:nth-child(n + 2) {
      grid-column: 2 / span 1;
    }
  }
`;
