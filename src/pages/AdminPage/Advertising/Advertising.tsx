import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Profile/Profile";

import AdvertisingCard from "../components/AdvertisingCard/AdvertisingCard";

import classes from "./Advertising.module.scss";
const archive = [
  { title: "name1" },
  { title: "name2" },
  { title: "name3" },
  { title: "name4" },
];

const Advertising = () => (
  <div className={classes.advertising}>
    <SideBar />
    <div className={classes.advertisingContainer}>
      <div className={classes.header}>
        <div className={classes.headerProfile}>
          <Profile />
        </div>
      </div>
      <div className={classes.advertisingContent}>
        <div className={classes.left}>
          <div className={classes.archiveAd}>
            <h3>Архив рекламы</h3>
            <div className={classes.archiveAdList}>
              {archive.map((item) => {
                return (
                  <div className={classes.archiveAdItem}>
                    <AdvertisingCard />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.activeAd}>
            <h3>Транслирующаяся реклама</h3>
            <div className={classes.activeAdItem}>
              <AdvertisingCard />
            </div>
          </div>
          <div className={classes.lineAd}>
            <h3>Реклама на очереди</h3>
            <div className={classes.lineAdItem}>
              <AdvertisingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Advertising;
