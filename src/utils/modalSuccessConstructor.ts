export interface IModalSuccess {
  title: string;
  firstRow?: string;
  secondRow?: string;
  buttonText?: string;
}

export const changePhoneSuccess: IModalSuccess = {
  title: "Ваш профиль успешно сохранен!",
  buttonText: "Продолжить",
};

export const userSignUpSuccess: IModalSuccess = {
  title: "Поздравляем!",
  firstRow: "Регистрация прощла успешно!",
};

export const orderSuccess: IModalSuccess = {
  title: "Поздравляем!",
  firstRow: "Ваш заказ успешно оформлен.",
  secondRow: "В ближайшее время мы обязательно свяжемся с Вами!",
};

export const userLoginInSuccess: IModalSuccess = {
  title: "Поздравляем!",
  firstRow: "Регистрация прощла успешно!",
};
