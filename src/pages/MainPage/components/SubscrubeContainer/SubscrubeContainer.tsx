import { useState } from "react";
import { useForm } from "react-hook-form";

import classes from "../SubscrubeContainer/SubscrubeContainer.module.scss";

import { InputField } from "../../../../components/common";

import { colors } from "../../../../types/colorTypes/colorTypes";

import ButtonImage from "../Button/Button";

import SubscrubeList from "./SubscrubeComponents/SubscrubeList";

import { newsDb } from "./newsDb";
type SubscribeFormTypes = {
  fullName: string;
  phoneNumber: string;
  category: string;
};

const SubscrubeContainer = () => {
  const [value, setValue] = useState<string>("Выбрать категорию");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SubscribeFormTypes>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: SubscribeFormTypes) => {
    newsDb.push({ ...data, category: value });
    console.log(newsDb);
    reset({ fullName: "", phoneNumber: "" });
    setValue("Выбрать категорию");
  };

  return (
    <>
      <div className={classes.image}>
        <div className={classes.image__flex}>
          <div className={classes.image__item}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.block}>
                <h3 className={classes.image__h3}>Оформить подписку</h3>
                <div className={classes.inputBlock}>
                  <InputField
                    color={colors.subscribeInput}
                    inputConfig={{
                      ...register("fullName", {
                        required: "Поле обязательно к заполнению",
                      }),
                    }}
                    placeholder="Ваше Ф.И.О."
                    type={"text"}
                  />
                </div>
                <div className={classes.inputBlock}>
                  <InputField
                    color={colors.subscribeInput}
                    inputConfig={{
                      ...register("phoneNumber", {
                        required: "Поле обязательно к заполнению",
                      }),
                    }}
                    placeholder="Номер телефона"
                    type={"text"}
                  />
                </div>
                <SubscrubeList
                  value={value}
                  setValue={setValue}
                  inputConfig={{
                    ...register("category"),
                  }}
                  type={"text"}
                />
                <div className={classes.error}>
                  <span>
                    {(errors.fullName?.message && "Заполните Ф.И.О") ||
                      (errors.phoneNumber?.message &&
                        "Заполните номер телефона")}
                  </span>
                </div>
                <div className={classes.btn__fix}>
                  <ButtonImage type={"submit"}>Продолжить</ButtonImage>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscrubeContainer;
