import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ADMIN_PAGE_COLLECTIONS } from "../../../../utils/path";

import { Button, InputField } from "../../../../components/common";

import EditBtn from "../EditBtn/EditBtn";

import banner from "../../../../assets/adminPage/banner.png";

import classes from "./CollectionItem.module.scss";

interface CollectionItemProps {
  path?: string | number;
  title: string;
  collection?: object;
}

const CollectionItem: FC<CollectionItemProps> = ({ path, title }) => {
  const navigate = useNavigate();
  const [isEdit, setEdit] = useState<boolean>(false);
  const [collectionName, setCollectionName] = useState<string>(title);

  const handler = (value: string) => {
    setCollectionName(value);
  };
  return (
    <div className={classes.collection}>
      <div className={classes.header}>
        {!isEdit ? (
          <div className={classes.edit}>
            <h5 className={classes.collectionName}>{collectionName}</h5>
            <div className={classes.editName}>
              <EditBtn onClick={() => setEdit(true)}>Редактировать</EditBtn>
            </div>
          </div>
        ) : (
          <div className={classes.edit}>
            <InputField
              autofocus={true}
              onKeyDown={(e) => e.key === "Enter" && setEdit(false)}
              onChange={handler}
              value={collectionName}
              type={"text"}
            />
            <Button type={"button"} onClick={() => setEdit(false)}>
              Сохранить
            </Button>
          </div>
        )}
      </div>
      <div
        className={classes.banner}
        onClick={() => navigate(ADMIN_PAGE_COLLECTIONS + `/${path}`)}
      >
        <img src={banner} alt="" />
      </div>
      <div className={classes.editBanner}>
        <EditBtn>Изменить фото</EditBtn>
      </div>
    </div>
  );
};

export default CollectionItem;
