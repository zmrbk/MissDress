import classes from "./MakeOrderPage.module.scss";

function MakeOrderPage() {
  return (
    <div className={classes.makeOrderPage}>
      <div className="container">
        <h3 className={classes.header}>Оформление заказа</h3>
        <p style={{ textAlign: "center" }}>
          Заказ можно оформить несколькими способами:
        </p>
        <ol>
          <li>
            <p>
              <span>На сайте:</span>
            </p>
            <ul>
              <li>
                Выберите товар и добавьте его в корзину, нажав кнопку "перейти в
                корзину" рядом с товаром
              </li>
              <li>Зайдите в Корзину в верхнем правом углу сайта</li>
              <li>Введите номер телефона и адрес (если требуется)</li>
              <li>Выберите способ оплаты</li>
              <li>
                Нажмите "Оформить заказ" и ожидайте звонка оператора (15-30 мин)
              </li>
            </ul>
          </li>
          <li>
            <p>
              <span>По телефону:</span>
            </p>
            <ul>
              <li>
                <a href="tel:+996707892010">0 (312) 98-66-70</a>
              </li>
              <li>
                <a href="tel:+996707892010">0 (555) 96-00-77</a>
              </li>
              <li>
                <a href="tel:+996707892010">0 (707) 89-20-10</a>
              </li>
              <li>
                <a href="tel:+996707892010">0 (705) 23-15-10</a>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <span>В офисе:</span>
            </p>
            <ul>
              <li>
                <a
                  href="https://2gis.kg/bishkek/firm/70000001036409659?floor=1&m=74.592154%2C42.874231%2F17.7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Насирдина Исанова, 79
                </a>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <span>По электронной почте:</span>
            </p>
            <ul>
              <li>
                Email:{" "}
                <a
                  href="https://mailto:missdress@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  missdress@gmail.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <span>По мессенджеру:</span>
            </p>
            <ul>
              <li>
                Whatsapp{" "}
                <a href="tel:+996707892010" target="_blank" rel="noreferrer">
                  +(996) 707-89-20-10
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default MakeOrderPage;
