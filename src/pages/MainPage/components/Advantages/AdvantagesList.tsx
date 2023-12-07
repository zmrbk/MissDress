import { FC } from "react";

import { IAdvantagesItems } from "../../../../types/AdvantagesTypes/AdvantagesTypes";

import styles from "./Advantages.module.scss";

const AdvantageList: FC = () => {
  const liElements: IAdvantagesItems[] = [
    {
      id: 1,
      title: "Гарантия обмена и возврата товара",
      text: "100% гарантия возврата товара",
    },
    {
      id: 2,
      title: "Профессиональная консультация",
      text: "Постоянная обратная связь с клиентами",
    },
    {
      id: 3,
      title: "Акции для покупателей",
      text: "Промокод для клиентов, акции на новые товары",
    },
    {
      id: 4,
      title: "Возможность оплаты при получении",
      text: "Возможность оплаты наложенным платежем",
    },
  ];

  return (
    <div className={styles.list}>
      {liElements.map((item) => (
        <div key={item.id} className={styles.block}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AdvantageList;
