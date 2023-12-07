import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import classes from "./Error.module.scss";

export const Error = ({ center }: { center?: string }) => (
  <Box className={`${classes.error} ${center ? classes.center : ""}`}>
    <Typography className={classes.text}>Проблема со сервером!</Typography>
  </Box>
);
