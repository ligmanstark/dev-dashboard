'use client';
import { useState, useEffect } from 'react';
import * as S from './style';
import { MoonIcon, SunIcon } from '../../assets/index';

export const Switcher = () => {
  const [isDark, setDark] = useState(false);

  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <S.Wrapper>
      <S.Switcher onClick={() => setDark(!isDark)}>
        <span>{themeText}</span>
        <S.Icon>
          <ThemeIcon />
        </S.Icon>
      </S.Switcher>
    </S.Wrapper>
  );
};
