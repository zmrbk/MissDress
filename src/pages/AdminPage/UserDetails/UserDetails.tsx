import { useParams } from "react-router-dom";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import BackButton from "../components/BackButton/BackButton";
import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Profile/Profile";

import { useFetchUserByIdQuery } from "../../../store/features/User/getUserByIdQuery";

import classes from "./UserDetails.module.scss";

const UserDetails = () => {
  const { id } = useParams();
  const { data: user } = useFetchUserByIdQuery(id);
  // console.log(user?.result);
  return (
    <div className={classes.userDetails}>
      <SideBar />
      <div className={classes.userDetailsContainer}>
        <div className={classes.header}>
          <BackButton path={ADMIN_PAGE_USERS}>
            Вернуться ко всем пользователям
          </BackButton>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>

        <div className={classes.userDetailsContent}>
          <div className={classes.infoBlock}>
            <h3 className={classes.infoTitle}>Информация о пользователе</h3>
            <ul className={classes.listOfInfo}>
              <li>
                <strong>Пользователь</strong>
                <span>
                  {user?.result.firstName} {user?.result.lastName}
                </span>
              </li>
              <li>
                <strong>Номер телефона</strong>
                <span>{user?.result.phoneNumber}</span>
              </li>
              <li>
                <strong>Адрес</strong>
                <span>Кыргызстан, г. Бишкек</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
