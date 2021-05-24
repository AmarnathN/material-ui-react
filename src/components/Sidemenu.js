import { makeStyles, withStyles } from "@material-ui/core";
import React from "react";

// const useStyles = makeStyles({
//   sideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     left: "0px",
//     width: "10%",
//     height: "100%",
//     backgroundColor: "blanchedalmond",
//   },
// });
const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "10%",
    height: "100%",
    backgroundColor: "blanchedalmond",
  },
};
const Sidemenu = (props) => {
  //   const classes = useStyles();
  //   return <div className={classes.sideMenu}></div>;
  const { classes } = props;
  return <div className={classes.sideMenu}></div>;
};

export default withStyles(styles)(Sidemenu);
