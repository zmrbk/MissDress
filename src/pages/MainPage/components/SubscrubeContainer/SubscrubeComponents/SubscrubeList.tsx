import { Dispatch, FC, SetStateAction, useState } from "react";

import classes from "./SubscrubeList.module.scss";

interface SubscrubeListProps {
  inputConfig?: object;
  type: string;
  onChange?: (value: string) => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const SubscrubeList: FC<SubscrubeListProps> = ({ value, setValue }) => {
  const [state, setState] = useState<boolean>(true);

  const changecategory = () => {
    setState(!state);
  };
  const changeValue = (name: string) => {
    setValue(name);
    setState(!state);
  };

  const subscribe = ["Платья", "Юбки", "Джинсы", "Брюки"];
  return state ? (
    <div onClick={changecategory} className={classes.image__input}>
      {value}
    </div>
  ) : (
    <div className={classes.image__in}>
      {subscribe.map((item) => {
        return (
          <div className={classes.image} onClick={() => changeValue(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default SubscrubeList;
