import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
import "./App.css";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "10%",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Sidemenu></Sidemenu>
      <div className={classes.appMain}>
        <Header></Header>
      </div>
      <CssBaseline></CssBaseline>
    </React.Fragment>
  );
}

export default App;
