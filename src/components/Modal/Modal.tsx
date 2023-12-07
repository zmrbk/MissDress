import React, { FC } from "react";

import { IModal } from "../../types/modalTypes/modalType";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";

import classes from "./Modal.module.scss";

interface IModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}

export const ModalContext = React.createContext<IModal | null>(null);

const Modal: FC<IModalProps> = ({ children, closeModal, isModalOpen }) => (
  <ModalContext.Provider value={{ closeModal }}>
    <div
      className={`${classes.modalOverlay} ${isModalOpen && classes.active}`}
      onClick={closeModal}
    >
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.modalLogo}>
          <i>
            <LogoIcon />
          </i>
        </div>
        {children}
      </div>
    </div>
  </ModalContext.Provider>
);

export default Modal;
