import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

const Notification = (props) => {
  const { notify, setnotify } = props;
  return (
    <Snackbar open={notify.isOpen} autoHideDuration={3000}>
      <Alert severity={notify.type}>{notify.message}</Alert>
    </Snackbar>
  );
};

export default Notification;
