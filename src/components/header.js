import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChefHatIcon from "../icons/ChefHat.svg";
import ProfileIcon from "../icons/Profile.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontFamily: "Nunito",
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
          <IconButton>
            <img src={ChefHatIcon} alt="Recipes"/>
          </IconButton>
          <IconButton>
            <img src={ProfileIcon} alt="Profile"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
