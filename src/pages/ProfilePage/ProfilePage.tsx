import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";
import mainImage from "../../assets/profilePage/image.png";
import { Modal } from "../../components";
import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";

import NewNumberForm from "../../components/Modal/NewNumberForm/NewNumberForm";

import classes from "./style.module.scss";
import FormComponent from "./components/FormComponent";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setOpenModal] = useState(false);
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const links = [
    { title: "Главная", path: "/" },
    { title: "Профиль", path: "/profile" },
  ];

  return (
    <div className={classes.mainDiv}>
      <BreadCrumbs links={links} />
      <Container className={classes.mainContainer} sx={{ flexGrow: 1 }}>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <NewNumberForm />
        </Modal>
        <Grid
          sx={{ textAlign: { xs: "center", md: "left" } }}
          container
          spacing={2}
        >
          <Grid className={classes.logoGrid} item xs={12} md={6}>
            <i className={classes.logoIcon}>
              <LogoIcon />
            </i>
            <img width="80%" src={mainImage} alt="" />
            <i className={classes.logoIconResp}>
              <LogoIcon />
            </i>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormComponent openModal={openModal} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfilePage;
