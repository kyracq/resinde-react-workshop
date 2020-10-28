import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import ClockIcon from "../icons/Clock.svg";
import {
  DialogContentText,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

import recipes from "../data/recipes.js";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  images: {
    objectFit: "cover",
    width: "100%",
    height: "300px",
    borderRadius: "0 0 20px 20px",
  },
  ingredients: {
    objectFit: "cover",
    width: "150px",
    height: "200px",
    borderRadius: "20px",
  },
  titleSection: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    height: "1.5rem",
    marginRight: "10px"
  }
}));

export default function RecipeDetails(props) {

  const { onClose, open, index } = props;
  const recipe = recipes[index];

  const classes = useStyles();

  return (
    <Dialog onClose={onClose} open={open} fullHeight>
      <img src={recipe.img} alt={recipe.title} className={classes.images} />
      <DialogContent>
        <div className={classes.titleSection}>
          <Typography variant="h4" className={classes.title}>{recipe.title}</Typography>
          <img src={ClockIcon} alt="Clock" className={classes.icon}/>
          <div>{recipe.time}</div>
        </div>
        <DialogTitle>Description</DialogTitle>

        <DialogContentText>{recipe.description}</DialogContentText>

        <DialogTitle>Ingredients</DialogTitle>
        <Grid container spacing={8} justify="center">
        {recipe.ingredients.map((ingredient) => {
          return (
            <Grid item>
              <img src={ingredient.img} alt={ingredient.name} className={classes.ingredients}/>
            </Grid>
          );
        })}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
