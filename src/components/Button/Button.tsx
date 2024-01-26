import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  border: none;
  background-color: var(--main-color);
  color: var(--white);
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    background-color: var(--main-color-hover);
  }
`;
