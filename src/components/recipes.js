import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Recipe from "./recipes";

import recipes from "../data/recipes.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontFamily: "Nunito",
  },
  images: {
    width: "100px",
    height: "100px",
  },
}));

export default function Recipes() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1">Recipes</Typography>
      {recipes.map((recipe) => {
        return (<img src={recipe.img} alt={recipe.title} className={classes.images}/>);
      })}
    </div>
  );
}
