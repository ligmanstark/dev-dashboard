import styled from '@emotion/styled';

export const Wrapper = styled.div``;

// export const H2 =styled.h2`
// font-size: 1rem;
//       line-height: 1.5;
//       font-weight: 700;
//       color: var(--utitle-color);

//       @media (min-width: 767px) {
//         font-size: 1.5rem;
//       }
// `

// export const H3 =styled.h3`
// color: var(--main-color);
//       font-size: 0.75rem;
//       line-height: 1.5;

//       &::before {
//         content: '@';
//       }

//       @media (min-width: 767px) {
//         font-size: 1rem;
//       }
// `

// export const Span = styled.span`
// color: var(--ujoined-color);
//       font-size: 0.75rem;
//       line-height: 1.5;
//       margin-top: 6px;

//       &::before {
//         content: 'Joined ';
//       }

//       @media (min-width: 767px) {
//         font-size: 1rem;
//         justify-self: end;
//       }
// `

export const UserTitle = styled.div`
  h2 {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 700;
    color: var(--utitle-color);

    @media (min-width: 767px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    color: var(--main-color);
    font-size: 0.75rem;
    line-height: 1.5;

    &::before {
      content: '@';
    }

    @media (min-width: 767px) {
      font-size: 1rem;
    }
  }

  span {
    color: var(--ujoined-color);
    font-size: 0.75rem;
    line-height: 1.5;
    margin-top: 6px;

    &::before {
      content: 'Joined ';
    }

    @media (min-width: 767px) {
      font-size: 1rem;
      justify-self: end;
    }
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-auto-flow: column;
    gap: 2px 10px;
  }
`;
