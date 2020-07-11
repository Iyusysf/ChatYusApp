import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./style";
export default function Registrasi() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.primary}> Halaman Registrasi</h1>;
      <TextField variant="outlined" />;
      <Button variant="contained" color="primary">
        Registrasi Klick
      </Button>
    </>
  );
}
