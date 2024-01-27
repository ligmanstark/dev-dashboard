'use client';
import { FC } from 'react';
import { Container } from '../../styled/components';
import { useRouter } from 'next/navigation';
import * as S from './style';
import { Switcher } from '../../components/Switcher/Switcher';
export const Header: FC = () => {
  const router = useRouter();
  return (
    <Container>
      <S.Wrapper style={{ cursor: 'pointer' }}>
        <S.Logo onClick={() => router.push('http://localhost:3000/')}>
          Developers Dashboard
        </S.Logo>
        <Switcher />
      </S.Wrapper>
    </Container>
  );
};
