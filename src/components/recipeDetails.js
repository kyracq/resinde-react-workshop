import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SvgIcon from '@material-ui/core/SvgIcon';
import ClockIcon from "../icons/Clock.svg";

import recipes from "../data/recipes.js";
import {
  DialogContentText,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: "black",
    fontFamily: "Nunito",
    marginBottom: "30px",
    fontWeight: "700",
  },
  images: {
    objectFit: "cover",
    width: "100%",
    height: "300px",
    borderRadius: "0 0 20px 20px",
  },
  titleSection: {
    display: "flex"
  },
  icon: {
    height: "1rem"
  }
}));

export default function RecipeDetails(props) {

  const { onClose, open, index } = props;
  const recipe = recipes[index];

  const classes = useStyles();

  return (
    <Dialog onClose={onClose} open={open}>
      <img src={recipe.img} alt={recipe.title} className={classes.images} />
      <DialogContent>
        <div className={classes.titleSection}>
          <Typography variant="h4">{recipe.title}</Typography>
          <img src={ClockIcon} alt="Clock" className={classes.icon}/>
          <div>{recipe.time}</div>
        </div>
        <DialogTitle>Description</DialogTitle>

        <DialogContentText>{recipe.description}</DialogContentText>

        <DialogTitle>Ingredients</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}
