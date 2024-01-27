import { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ModalOverlay } from './ModalOverlay';
import { closeModal, openModal } from '../../store/slices/modalSlice';

interface Props {
  modal: ReactNode;
  children: ReactNode;
  id: string;
}

export const ModalControl: FC<Props> = ({ children, id, modal }) => {
  const dispatch = useDispatch();
  const currentModal = useSelector(
    (state: RootState) => state.modalReducer.currentModal
  );
  const isOpen = currentModal === id;

  return (
    <>
      <div
        style={{ cursor: 'pointer', width: 'fit-content' }}
        onClick={() => dispatch(openModal(id))}
      >
        {children}
      </div>
      {
        <ModalOverlay setOpen={() => dispatch(closeModal())} open={isOpen}>
          {modal}
        </ModalOverlay>
      }
    </>
  );
};
