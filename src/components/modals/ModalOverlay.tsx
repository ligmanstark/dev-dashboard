import React, { FC } from 'react';
import * as S from './style';

interface Props {
  open?: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

export const ModalOverlay: FC<Props> = ({ children, setOpen, open }) => {
  return (
    <>
      {open && (
        <S.Wrapper>
          <S.Overlay onClick={() => setOpen(false)} />
          <S.Content>{children}</S.Content>
        </S.Wrapper>
      )}
    </>
  );
};
