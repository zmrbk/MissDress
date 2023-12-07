import Modal from "@mui/material/Modal";
import { CardMedia } from "@mui/material";

import classes from "./ModalFullPhoto.module.scss";

interface ModalFullPhotoProps {
  handleClose: (close: boolean) => void;
  open: boolean;
  photo: string;
}

export default function ModalFullPhoto({
  handleClose,
  open,
  photo,
}: ModalFullPhotoProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CardMedia
          component="img"
          height="150px"
          image={photo}
          alt="imgProduct"
          className={classes.modalPhoto}
        />
      </Modal>
    </div>
  );
}
