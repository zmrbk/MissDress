import { Grid } from "@mui/material";

import FooterList from "./components/FooterList";
import IconsFooter from "./components/IconsFooter";

import classes from "./style.module.scss";

const Footer = () => {
  const liElements = [
    {
      title: "О нас",
      path: "/about",
    },
    {
      title: "+996712345678",
      path: "tel:+996712345678",
    },
    {
      title: "missdress@gmail.com",
      path: `https://mailto:missdress@gmail.com`,
    },
    {
      title: "Исанова 79",
      path: "https://2gis.kg/bishkek/firm/70000001036409659?m=74.592154%2C42.874231%2F16",
    },
  ];

  return (
    <div className={classes.mainDiv}>
      <div className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <IconsFooter />
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "flex" } }}
            className={classes.list}
            item
            xs={12}
            md={12}
          >
            <FooterList />
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.responsiveLi}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {liElements.map((item, index) => (
              <ul key={index}>
                <a href={item.path}>{item.title}</a>
              </ul>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
