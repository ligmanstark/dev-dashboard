import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const InfoItem = styled.div`
  color: var(--info-color);
  font-size: 0.75rem;
  line-height: 1.5;
  display: flex;
  align-items: center;

  svg {
    fill: var(--info-color);
    margin-right: 1rem;
    width: 20px;
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: var(--info-color);

  &:hover {
    text-decoration: underline;
  }
`;
