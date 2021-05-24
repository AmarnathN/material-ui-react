import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdgf",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBotton: theme.spacing(2),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: theme.palette.primary,
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

const PageHeader = (props) => {
  const classes = useStyles();
  const { title, description, icon } = props;
  return (
    <Paper elevation={4} className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant={"h6"} component={"div"}>
            {title}
          </Typography>
          <Typography variant={"subtitle2"} component={"div"}>
            {description}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
