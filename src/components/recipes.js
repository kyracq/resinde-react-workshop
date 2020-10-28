import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RecipeDetails from "./recipeDetails";

import recipes from "../data/recipes.js";

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
    width: "400px",
    height: "300px",
    borderRadius: "20px",
  },
  recipe: {
    margin: "30px",
  },
  wrapper: {
    margin: "60px",
  },
  recipeTitle: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  recipeItem: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function Recipes() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [currRecipeIndex, setCurrRecipeIndex] = React.useState(0);

  const handleClickOpen = (index) => () => {
    setCurrRecipeIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <Typography variant="h4" className={classes.title}>
        Recipes
      </Typography>
      <Grid container spacing={8} justify="center">
        {recipes.map((recipe, index) => {
          return (
            <Grid item>
              <div
                onClick={handleClickOpen(index)}
                className={classes.recipeItem}
              >
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  className={classes.images}
                />
                <div className={classes.recipeInfo}>
                  <div className={classes.recipeTitle}>{recipe.title}</div>
                  <div style={{ color: "grey" }}>{recipe.time}</div>
                </div>
              </div>
              <RecipeDetails
                onClose={handleClose}
                open={open}
                index={currRecipeIndex}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
