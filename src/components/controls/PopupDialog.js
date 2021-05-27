import { Dialog, DialogContent, DialogTitle, Divider, makeStyles } from "@material-ui/core";
import React from "react";

const PopupDialog = (props) => {
  const classes = useStyles();
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
