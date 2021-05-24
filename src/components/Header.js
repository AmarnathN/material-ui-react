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
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: 0.6,
    padding: "0px 8px",
    fontSize: "0.8rem",
    border: "1px solid #000",
    backgroundColor: "#a2a2a2",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      paddingRight: "4px",
    },
  },
  btnRoot: {
    backgroundColor: "blue",
  },
  btnLabel: {
    backgroundColor: "grey",
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
              startAdornment={<Search fontSize="small" />}
            ></InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton classes={{ root: classes.btnRoot, label: classes.btnLabel }}>
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
