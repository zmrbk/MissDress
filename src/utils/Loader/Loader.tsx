import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import classes from "./Loader.module.scss";

interface LoaderProps {
  center?: string;
  color?: string;
  size?: string;
}

export const Loader = ({ center, color, size }: LoaderProps) => (
  <Box className={`${classes.loader} ${center ? classes.center : ""}`}>
    <CircularProgress
      size={size ? size : "40px"}
      sx={{
        color: color ? color : "#372e24",
      }}
    />
  </Box>
);
