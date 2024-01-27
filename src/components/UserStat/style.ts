import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const UserStat = styled.div`
  background-color: var(--stat-bg);
  color: var(--stat-color);
  padding: 15px 32px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled(Info)`
  color: var(--gray-200);
  font-size: 0.75rem;
  line-height: 1.5;
`;

export const Num = styled(Info)`
  font-size: 1.25rem;
  line-height: 1.5;
  font-weight: 700;
`;
