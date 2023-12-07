import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useTimer } from "../../../hooks/useTimer";
import { ERROR_PAGE } from "../../../utils/path";
import { InputField, Button } from "../../common";

import classes from "../VerificationForm/VerificationForm.module.scss";

type getMessageType = {
  verificationCode: string;
};
interface SendMessProps {
  title: string;
  setMessageModal: (value: boolean) => void;
  setNumberModal: (value: boolean) => void;
}
const SendMess: FC<SendMessProps> = ({ title }) => {
  const [{ minutes, seconds }, restart] = useTimer(60);
  const isDisabledButton = Number(seconds) !== 0 || Number(minutes) !== 0;

  const handleRestartTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    restart(60);
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<getMessageType>({ mode: "onBlur", reValidateMode: "onChange" });

  const handleAccept = () => {
    console.log(12);
  };

  return (
    <form className={classes.modalForm} onSubmit={handleSubmit(handleAccept)}>
      <h3 className={classes.modalTitle}>{title || "Регистрация"}</h3>
      <div className={classes.modalFields}>
        <div className={classes.inputBlock}>
          <InputField
            inputConfig={{
              ...register("verificationCode", {
                required: "Поле обязательно к заполнению",
              }),
            }}
            placeholder={"Введите код подтверждения"}
            type={"text"}
          />
        </div>
        <div className={classes.modalButton}>
          <Button disabled={!isValid} type={"submit"}>
            Подтвердить
          </Button>
        </div>
        <Link className={classes.modalSupport} to={ERROR_PAGE}>
          Не пришло SMS?
        </Link>
        <div className={classes.modalButtonResend}>
          <Button onClick={handleRestartTimer} disabled={isDisabledButton}>
            Отправить снова
            {isDisabledButton && (
              <>
                &nbsp;
                <span>{minutes}</span>:<span>{seconds}</span>
              </>
            )}
          </Button>
        </div>
      </div>
      <div className={classes.modalError}>
        {errors.verificationCode && (
          <span>{errors.verificationCode.message}</span>
        )}
      </div>
    </form>
  );
};

export default SendMess;
