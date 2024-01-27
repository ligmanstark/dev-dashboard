'use client';
import { useState, useEffect } from 'react';
import * as S from './style';
import { MoonIcon, SunIcon } from '../../assets/index';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../store/slices/themeSlice';
export const Switcher = () => {
  const dispatch = useDispatch();
  const [isDark, setDark] = useState(false);

  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    dispatch(setTheme(isDark));
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
