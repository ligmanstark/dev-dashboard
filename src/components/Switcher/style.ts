import styled from '@emotion/styled';

export const Wrapper = styled.div`
  :global {
    body[data-theme='light'] {
      --switcher-color: var(--gray-100);
      --switcher-color-hover: var(--gray-300);
    }

    body[data-theme='dark'] {
      --switcher-color: var(--white);
      --switcher-color-hover: var(--gray-100);
    }
  }
`;

export const Switcher = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  span {
    color: var(--switcher-color);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }

  &:hover {
    span {
      color: var(--switcher-color-hover);
    }
    svg {
      fill: var(--switcher-color-hover);
    }
  }
`;

export const Icon = styled.div`
  fill: var(--switcher-color);
`;
