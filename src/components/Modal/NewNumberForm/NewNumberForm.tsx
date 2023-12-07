import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useLazyGetSmsCodeQuery } from "../../../store/authorization/Authorization";
import {
  useAddPhoneMutation,
  useUpdatePhoneMutation,
} from "../../../store/features/User/userMe/meQuery";

import { changePhoneSuccess } from "../../../utils/modalSuccessConstructor";

import { Button, InputField } from "../../common";
import VerificationForm from "../VerificationForm/VerificationForm";

import classes from "./NewNumberForm.module.scss";

type getMessageTypeR = {
  phoneNumber: string;
  code: string;
};

const NewNumberForm: FC = () => {
  const [isContinue, setContinue] = useState<boolean>(false);
  const [isSetUser, setUserEnter] = useState<boolean>(true);
  const [addPhone, { data: phoneData = [], isSuccess }] = useAddPhoneMutation();
  const [updatePhone] = useUpdatePhoneMutation();
  const [getSms, { data: sms = null, isSuccess: smsSuccess }] =
    useLazyGetSmsCodeQuery();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<getMessageTypeR>({ mode: "onBlur", reValidateMode: "onChange" });

  const enter = async (data: getMessageTypeR) => {
    await addPhone(data.phoneNumber);
    reset();
  };
  useEffect(() => {
    if (isSuccess) {
      const id = phoneData.result?.user;
      getSms(id);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (smsSuccess) {
      sessionStorage.setItem("data", JSON.stringify(sms.result));
      updatePhone({
        phoneNumber: phoneData.result?.unregistredNumber,
        code: sms.result?.code,
      });
      setContinue(true);
    }
  }, [sms]);

  return (
    <>
      {!isContinue ? (
        <div>
          <h4 className={classes.titleText}>Изменить номер телефона</h4>
          <form onSubmit={handleSubmit(enter)} className={classes.phoneForm}>
            <div style={{ marginBottom: "30px" }}>
              <InputField
                inputConfig={{
                  ...register("phoneNumber", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                      message: "Некорректный номер телефона",
                    },
                  }),
                }}
                placeholder="Указать новый номер"
                type="text"
              />
            </div>
            <Button type="submit">Подтвердить</Button>
            <div className={classes.modalError}>
              {errors.phoneNumber && <span>{errors.phoneNumber?.message}</span>}
            </div>
          </form>
        </div>
      ) : (
        <VerificationForm
          title="Смена номера"
          modalSuccessBody={changePhoneSuccess}
          setContinue={setContinue}
          setUserEnter={setUserEnter}
        />
      )}
    </>
  );
};

export default NewNumberForm;
