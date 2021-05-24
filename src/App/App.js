import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
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
      default: "#ffffff",
      light: "#787878",
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
        </div>
        <CssBaseline></CssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
