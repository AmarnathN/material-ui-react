import { Dialog, DialogContent, DialogTitle, Divider, makeStyles, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { MyControls } from "./MyControls";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
}));

const PopupDialog = (props) => {
  const classes = useStyles();
  const { title, children, openPopup, setOpenPopup, handleClosePopup } = props;

  return (
    <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <MyControls.ActionIconButton onClick={handleClosePopup}>
            <Close />
          </MyControls.ActionIconButton>
        </div>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
