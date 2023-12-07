import { FC } from "react";

import styles from "./AboutUs.module.scss";

import { aboutUsText, IAboutText } from "./AboutDb";

const AboutUs: FC = () => (
  <>
    <div className={styles.main_container}>
      <div className={styles.container}>
        {aboutUsText.map((el: IAboutText) => (
          <div key={el.id} className={styles.article}>
            <h4>{el.title}</h4>
            <p>{el.text}</p>
            <img src={el.image1} width="100%" alt="img1" />
            <img src={el.image2} width="100%" alt="img2" />
            <img src={el.image3} width="100%" alt="img3" />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default AboutUs;
