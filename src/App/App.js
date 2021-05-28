import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";

import React from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
import Employees from "../pages/employee/Employees";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ff6200",
      light: "#f57b2f",
    },
    theme: {
      main: "#00e0ce",
      light: "#a7d4d0",
    },
    primary: {
      main: "#00e0ce",
      light: "#82d1cb",
    },
    background: {
      // default: "#f2f2f2",
      default: "#e2e2e2",
      light: "#a8a8a8",
      dark: "#00000",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  appMain: {
    width: "100%",
    backgroundColor: theme.palette.background.dark,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* <Sidemenu /> */}
        <div className={classes.appMain}>
          <Header></Header>
          <Employees />
        </div>
        <CssBaseline></CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
