import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarAlert({ handleClick, handleClose, text, horizontal, vertical, duration }) {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        message={text}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      ></Snackbar>
    </>
  );
}
