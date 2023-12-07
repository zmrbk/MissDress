import { FC, useContext } from "react";

import { IModalSuccess } from "../../../utils/modalSuccessConstructor";

import { Button } from "../../common";
import { ModalContext } from "../Modal";
import { IModal } from "../../../types/modalTypes/modalType";

import classes from "./SuccessModal.module.scss";

interface SuccessModalProps {
  modalBody: IModalSuccess;
  setContinue?: (value: boolean) => void;
  setIsSuccess?: (success: boolean) => void;
}

const SuccessModal: FC<SuccessModalProps> = ({
  modalBody,
  setContinue,
  setIsSuccess,
}) => {
  const { closeModal } = useContext(ModalContext) as IModal;

  const continueHandler = () => {
    closeModal();
    setContinue && setContinue(false);
    setIsSuccess && setIsSuccess(false);
  };

  return (
    <div className={classes.successModal}>
      <h5 className={classes.successModalTitle}>{modalBody.title}</h5>
      {modalBody.firstRow && (
        <p className={classes.successModalText}>{modalBody.firstRow}</p>
      )}
      {modalBody.secondRow && (
        <p className={classes.successModalText}>{modalBody.secondRow}</p>
      )}
      <div className={classes.buttonBlock}>
        <Button onClick={continueHandler}>
          {modalBody.buttonText || "Продолжить покупки"}
        </Button>
      </div>
    </div>
  );
};

export default SuccessModal;
