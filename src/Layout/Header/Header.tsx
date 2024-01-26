'use client';
import { FC } from 'react';
import { Container } from '../../styled/components';
import * as S from './style';
import { Switcher } from '../../components/Switcher/Switcher';
export const Header: FC = () => {
  return (
    <Container>
      <S.Wrapper>
        <S.Logo>Developers Dashboard</S.Logo>
        <Switcher />
      </S.Wrapper>
    </Container>
  );
};
