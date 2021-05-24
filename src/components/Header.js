import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import {
  ChatBubble as ChatBubbleIcon,
  NotificationsNone as NotificationsNoneIcon,
  ExitToApp as ExitToAppIcon,
  Search,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
  },
  searchInput: {
    opacity: 0.6,
    padding: "0px 8px",
    fontSize: "0.8rem",
    border: "1px solid #000",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems={"center"}>
          <Grid item>
            <InputBase
              className={classes.searchInput}
              placeholder={"search topics..."}
              endAdornment={<Search fontSize="small" />}
            ></InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={3} color="secondary">
                <NotificationsNoneIcon></NotificationsNoneIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ChatBubbleIcon></ChatBubbleIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <ExitToAppIcon></ExitToAppIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
