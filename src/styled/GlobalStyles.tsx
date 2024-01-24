import { css, Global } from '@emotion/react';
import { FC } from 'react';

export const GlobalStyles: FC = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
      }

      :root {
        --main-color: #0079ff;
        --main-color-hover: #60abff;

        --white: #fff;

        --gray-50: #f6f8ff;
        --gray-100: #697c9a;
        --gray-200: #4b6a9b;
        --gray-300: #2b3442;
        --gray-400: #1e2a47;
        --gray-500: #141d2f;

        --error-color: #f74646;

        --shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

        width: 100%;
        padding: 0 24px;

        @media (min-width: 767px) {
          width: 734px;
          padding: 0;
          margin: 0 auto;
        }
      }

      :root {
        body[data-theme='light'] {
          --switcher-color: var(--gray-100);
          --switcher-color-hover: var(--gray-300);
        }

        body[data-theme='dark'] {
          --switcher-color: var(--white);
          --switcher-color-hover: var(--gray-100);
        }
      }

      body {
        font-family: 'Space Mono', monospace;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--gray-50);
      }

      body[data-theme='dark'] {
        background-color: var(--gray-500);
      }

      a {
        font-family: 'Space Mono', monospace;
      }
    `}
  />
);
