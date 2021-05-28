import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import {
  ChatBubble as ChatBubbleIcon,
  NotificationsNone as NotificationsNoneIcon,
  ExitToApp as ExitToAppIcon,
  Search,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.theme.main,
    transform: "translateZ(-19.7rem)",
    background: `linear-gradient(165deg,white 75%,${theme.palette.theme.main}  95%)`,
    boxShadow: `0 3px 5px 2px rgba(0, 224, 206, .3)`,
  },
  searchInput: {
    opacity: 0.6,
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    border: "1px solid #000",
    color: "text.primary",
    backgroundColor: theme.palette.background.light,
    "&:hover": {
      backgroundColor: theme.palette.background.light,
    },
    "& .MuiSvgIcon-root": {
      paddingRight: theme.spacing(1),
    },
    borderRadius: "6px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems={"center"}>
          <Grid item>
            <InputBase className={classes.searchInput} placeholder={"search topics..."} startAdornment={<Search />}></InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton color="inherit">
              <Badge badgeContent={3} color={"secondary"}>
                <NotificationsNoneIcon></NotificationsNoneIcon>
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={2} color={"secondary"}>
                <ChatBubbleIcon></ChatBubbleIcon>
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <ExitToAppIcon></ExitToAppIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
