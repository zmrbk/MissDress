import React, { FC } from "react";

import EditBtn from "../../components/EditBtn/EditBtn";

import classes from "./Photos.module.scss";

interface PhotosProps {
  images: any[];
}
const Photos: FC<PhotosProps> = ({ images }) => {
  const isImagesExist = images?.length > 0;
  return (
    <div className={classes.photos}>
      <div className={classes.images}>
        {(isImagesExist &&
          images.map((image) => {
            return (
              <div className={classes.image} key={image.id}>
                <img src={image.url} alt="" />
              </div>
            );
          })) || (
          <div className={classes.imagePlug}>
            <input type="file" />
          </div>
        )}
        <div className={classes.editPhotos}>
          <EditBtn>
            {!isImagesExist ? "Добавить фото" : "Изменить фото"}
          </EditBtn>
        </div>
      </div>
    </div>
  );
};

export default Photos;
