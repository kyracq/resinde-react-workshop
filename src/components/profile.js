import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Recipes from "./recipes";

const useStyles = makeStyles((theme) => ({
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
      <Recipes title="John Doe's recipes" />
    </div>
  );
}
