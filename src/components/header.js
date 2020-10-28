import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChefHatIcon from "../icons/ChefHat.svg";
import ProfileIcon from "../icons/Profile.svg";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontFamily: "Nunito",
  },
  margin: {
    margin: "0 20px 0 20px",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            food.io
          </Typography>
          <Link to="/">
            <IconButton className={classes.margin}>
              <img src={ChefHatIcon} alt="Recipes" />
            </IconButton>
          </Link>
          <Link to="/profile">
            <IconButton className={classes.margin}>
              <img src={ProfileIcon} alt="Profile" />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
