import { makeStyles, withStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "10%",
    height: "100%",
    backgroundColor: theme.palette.background.light,
  },
}));
// const styles = {
//   sideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     left: "0px",
//     width: "10%",
//     height: "100%",
//     backgroundColor: ,
//   },
// };

const Sidemenu = (props) => {
  const classes = useStyles();
  return <div className={classes.sideMenu}>{"Side menue to be implemented"}</div>;
  //   const { classes } = props;
  //   return <div className={classes.sideMenu}></div>;
};

// export default withStyles(styles)(Sidemenu);
export default Sidemenu;
