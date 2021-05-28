import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from "@material-ui/core";
import { NotListedLocation } from "@material-ui/icons";
import React from "react";
import { MyControls } from "./MyControls";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogActions: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "4rem",
    },
  },
}));

const ConfirmDialog = (props) => {
  const classes = useStyles();
  const { confirmDialog, setConfirmDialog } = props;
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocation></NotListedLocation>
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{`${confirmDialog.title}?`}</Typography>
        <Typography variant="subtitle2">{`${confirmDialog.subTitle}`}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <MyControls.Button color="primary" text={"Yes"} onClick={confirmDialog.onConfirm}></MyControls.Button>
        <MyControls.Button
          color="secondary"
          text={"No"}
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        ></MyControls.Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
