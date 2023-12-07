import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { userSignUpSuccess } from "../../../utils/modalSuccessConstructor";

import { InputField, Button } from "../../common";

import VerificationForm from "../VerificationForm/VerificationForm";

import {
  useLazyGetSmsCodeQuery,
  useUserSignUpMutation,
} from "../../../store/authorization/Authorization";

import classes from "./SignInForm.module.scss";

interface SignInFormProps {
  setUserEnter: (value: boolean) => void;
  setSignIn: (value: boolean) => void;
}

type SignInFormType = {
  name: string;
  surName: string;
  phoneNumber: string;
  acceptTerms: boolean | string;
};

const SignInForm: FC<SignInFormProps> = ({ setUserEnter, setSignIn }) => {
  const [isContinue, setContinue] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormType>({ mode: "onBlur", reValidateMode: "onChange" });

  const [signUp, { isSuccess, data = null }] = useUserSignUpMutation();
  const [getSms, { data: sms = null, isSuccess: isSmsSuccess }] =
    useLazyGetSmsCodeQuery();

  useEffect(() => {
    if (isSuccess) {
      const id = data.result?.user?.id;
      getSms(id);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSmsSuccess) {
      sessionStorage.setItem("data", JSON.stringify(sms.result));
      setContinue(true);
    }
  }, [sms]);

  const onSubmit = async (user: SignInFormType) => {
    await signUp({
      firstName: user.name,
      lastName: user.surName,
      phoneNumber: user.phoneNumber,
    });
    user.acceptTerms = false;
    user.name = "";
    user.phoneNumber = "";
    user.surName = "";
  };

  return (
    <>
      {!isContinue ? (
        <form className={classes.modalForm} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={classes.modalTitle}>Регистрация</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <InputField
                inputConfig={{
                  ...register("name", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 3,
                      message: "Слишком короткое имя",
                    },
                  }),
                }}
                placeholder={"Имя"}
                type={"text"}
              />
              <div className={classes.modalError}>
                {errors.name && <span>{errors.name?.message}</span>}
              </div>
            </div>
            <div className={classes.inputBlock}>
              <InputField
                inputConfig={{
                  ...register("surName", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 3,
                      message: "Слишком короткая Фамилия",
                    },
                  }),
                }}
                placeholder={"Фамилия"}
                type={"text"}
              />

              <div className={classes.modalError}>
                {errors.surName && <span>{errors.surName?.message}</span>}
              </div>
            </div>
            <div className={classes.inputBlock}>
              <InputField
                inputConfig={{
                  ...register("phoneNumber", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 13,
                      message: "Слишком короткий номер телефона",
                    },
                    pattern: {
                      value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                      message: "Некорекктный номер телефона",
                    },
                  }),
                }}
                placeholder={"Номер телефона"}
                type={"phone"}
              />

              <div className={classes.modalError}>
                {errors.phoneNumber && (
                  <span>{errors.phoneNumber?.message}</span>
                )}
              </div>
            </div>
            <div className={classes.modalCheckBox}>
              <input
                type="checkbox"
                id="check"
                {...register("acceptTerms", { required: "Условия не приняты" })}
              />
              <label htmlFor="check">
                <span>Я согласен с условиями публичной оферты</span>
              </label>
            </div>
            <div className={classes.modalButton}>
              <Button>Продолжить</Button>
              <button
                className={classes.modalButtonSignIn}
                onClick={() => setSignIn(false)}
              >
                Войти
              </button>
            </div>
          </div>
          <div className={classes.modalError}>
            {errors.acceptTerms && <span>{errors?.acceptTerms?.message}</span>}
          </div>
        </form>
      ) : (
        <VerificationForm
          title="Регистрация"
          setUserEnter={setUserEnter}
          setContinue={setContinue}
          modalSuccessBody={userSignUpSuccess}
        />
      )}
    </>
  );
};

export default SignInForm;
