import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RecipeDetails from "./recipeDetails";

import recipes from "../data/recipes.js";

const useStyles = makeStyles((theme) => ({
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
    "@media (max-width: 500px)": {
      width: "100%",
    },
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

  // TODO: write function to handle user clicking on a recipe

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <Typography variant="h4" className={classes.title}>
        Recipes
      </Typography>
      <Grid container spacing={8} justify="center">
        {recipes.map((recipe) => {
          return (
            <Grid item>
              {/* TODO: display recipes */}
              <RecipeDetails
                onClose={handleClose}
                open={open}
                index={0} // TODO: set right index
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
