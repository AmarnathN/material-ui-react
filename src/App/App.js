import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";

import React from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
import Employees from "../pages/employee/Employees";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#00e68a",
      light: "#1affd1",
    },
    primary: {
      light: "#787878",
      main: "#000000",
    },
    background: {
      default: "#f2f2f2",
      light: "#787878",
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
    paddingLeft: "10%",
    width: "100%",
    backgroundColor: theme.palette.background.dark,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Sidemenu />
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
