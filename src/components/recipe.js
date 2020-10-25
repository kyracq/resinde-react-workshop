import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: "100px",
    height: "100px"
  },
}));

export default function Recipe(props) {
  const classes = useStyles();

  return (
    <div>
      <img src={props.data.imgSrc} className={classes.image} alt={props.data.title}/>
    </div>
  );
}
