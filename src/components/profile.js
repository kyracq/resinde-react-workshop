import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Recipes from "./recipes";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "black",
    fontFamily: "Nunito",
    marginBottom: "30px",
    fontWeight: "700",
  },
  wrapper: {
    margin: "60px",
  },
  profile: {
    textAlign: "center",
    padding: "60px 60px 0 60px",
    alignContent: "center",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.profile}>
        <img src="/images/ProfilePhoto.jpg" className={classes.image} />
        <Typography variant="h6">John Doe</Typography>
        <Typography variant="h8">3 posts</Typography>
      </div>
      <Recipes title="John Doe's recipes"/>
    </div>
  );
}
