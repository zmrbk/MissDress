import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "./BreadCrumbs.module.scss";

type link = {
  title: string;
  path?: string;
};

interface BreadCrumbsProps {
  links: link[];
}

export const BreadCrumbs = ({ links }: BreadCrumbsProps) => (
  <Breadcrumbs className={classes.breadCrumbs} aria-label="breadcrumb">
    {links.map(({ title, path }, index) => {
      return path ? (
        <Link key={index} className={classes.link} to={path} title={title}>
          {title}
        </Link>
      ) : (
        <Typography key={index} className={classes.text}>
          {title}
        </Typography>
      );
    })}
  </Breadcrumbs>
);
