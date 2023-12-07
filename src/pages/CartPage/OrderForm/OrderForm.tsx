import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button, InputField } from "../../../components/common";
import { colors } from "../../../types/colorTypes/colorTypes";
import { IOrderFormValues } from "../../../types/cartPageTypes/orderFormTypes";

import {
  useAddContactInfoMutation,
  useUpdateContactInfoMutation,
} from "../../../store/features/Contact/ContactInfoQuery";

import { city, country, user } from "../../ProfilePage/types/types";

import OrderCheck from "./OrderCheck/OrderCheck";
import classes from "./OrderForm.module.scss";

const OrderForm = () => {
  const [addContactInfo, { data, isSuccess }] = useAddContactInfoMutation();
  const [updateContactInfo] = useUpdateContactInfoMutation();
  const user: user = JSON.parse(localStorage.getItem("user") || "{}");
  const cities: city[] = JSON.parse(localStorage.getItem("city") || "[]");
  const countries: country[] = JSON.parse(
    localStorage.getItem("country") || "[]"
  );
  const [disable] = useState<boolean>(
    localStorage.getItem("accessToken") ? false : true
  );
  const [isSaved, setSaved] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [city, setCity] = useState<city>(cities[0]);
  const [country, setCountry] = useState<country>(countries[0]);
  const [orderFormValues, setInputFormValues] =
    useState<IOrderFormValues | null>(null);
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm<IOrderFormValues>({ mode: "onBlur" });

  const handleChangeCity = (event: ChangeEvent<HTMLSelectElement>) => {
    const index: any = event.target.value;
    setCity(cities[index]);
  };

  const handleChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    const index: any = event.target.value;
    setCountry(countries[index]);
  };

  const onSubmit = async (data: IOrderFormValues) => {
    if (localStorage.getItem("contactInfoId") === "undefined") {
      await addContactInfo({
        firstName,
        lastName,
        phoneNumber,
        cityId: city.id,
        countryId: country.id,
      });
      setSaved(true);
      setInputFormValues({
        ...data,
        cityId: city.title,
        countryId: country.title,
      });
    } else {
      const id = JSON.parse(localStorage.getItem("contactInfoId") || "");
      await updateContactInfo({
        data: {
          firstName,
          lastName,
          phoneNumber,
          cityId: city.id,
          countryId: country.id,
        },
        id,
      });
      setSaved(true);
      setInputFormValues({
        ...data,
        cityId: city.title,
        countryId: country.title,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("contactInfoId", data?.result?.id);
  }, [isSuccess]);

  return (
    <div className={classes.orderFormWrapper}>
      <div className={classes.orderFormHeader}>
        <h2 className={classes.orderFormTitle}>Оформление заказа</h2>
      </div>
      {!isSaved ? (
        <form className={classes.orderForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.orderFormFlexWrapper}>
            <div className={classes.orderFormLeft}>
              <InputField
                inputConfig={{
                  ...register("firstName", {
                    required: "Укажите Имя",
                    minLength: {
                      value: 3,
                      message: "Имя слишком короткое",
                    },
                  }),
                }}
                color={colors.secondary}
                placeholder={"Ваше имя"}
                type={"text"}
                onChange={setFirstName}
                value={firstName}
              />
              <InputField
                inputConfig={{
                  ...register("phoneNumber", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                      message: "Некорректный номер телефона",
                    },
                    minLength: {
                      value: 13,
                      message: "Слишком короткий номер телефона",
                    },
                  }),
                }}
                color={colors.secondary}
                placeholder={"Номер телефона"}
                type={"tel"}
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
              <select
                {...register("cityId", {
                  required: "Укажите Город",
                })}
                onChange={handleChangeCity}
                disabled={disable}
              >
                {cities.map((item, index) => {
                  return (
                    <option key={item.id} value={index}>
                      {" "}
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={classes.orderFormRight}>
              <InputField
                inputConfig={{
                  ...register("lastName", {
                    required: "Укажите Фамилию",
                  }),
                }}
                color={colors.secondary}
                placeholder={"Ваша фамилия"}
                type={"text"}
                value={lastName}
                onChange={setLastName}
              />
              <select
                {...register("countryId", {
                  required: "Укажите Страну",
                })}
                onChange={handleChangeCountry}
                disabled={disable}
              >
                {countries.map((item, index) => {
                  return (
                    <option key={item.id} value={index}>
                      {" "}
                      {item.title}
                    </option>
                  );
                })}
              </select>
              <Button disabled={disable} type="submit">
                Сохранить
              </Button>
            </div>
          </div>
          {!isValid && (
            <div className={classes.orderFormError}>
              <span>
                {(errors.phoneNumber?.message &&
                  "Некорректный номер телефона") ||
                  (isDirty && "Заполните все поля!")}
              </span>
            </div>
          )}
        </form>
      ) : (
        <OrderCheck orderFormValues={orderFormValues} setSaved={setSaved} />
      )}
    </div>
  );
};

export default OrderForm;
