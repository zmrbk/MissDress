import Winter from "../../../../assets/Main/Collaction/winter.png";

import Spring from "../../../../assets/Main/Collaction/spring.png";

import Summer from "../../../../assets/Main/Collaction/summer.png";

import Autumn from "../../../../assets/Main/Collaction/autumn.png";

import CollactionComponents from "./CollactionComponent/CollactionComponents";

import classes from "./CollactionContainer.module.scss";

const collactions = [
  {
    title: "Зима",
    image: Winter,
  },
  {
    title: "Весна",
    image: Spring,
    reverse: true,
  },
  {
    title: "Лето",
    image: Summer,
  },
  {
    title: "Осень",
    reverse: true,
    image: Autumn,
  },
];

const CollactionContainer = () => (
  <>
    <div className={classes.all}>
      <h1 className={classes.coll}>Коллекция</h1>
      {collactions.map((collaction) => {
        return (
          <CollactionComponents
            reverse={collaction.reverse}
            children={collaction.title}
            image={collaction.image}
          />
        );
      })}
    </div>
  </>
);

export default CollactionContainer;
