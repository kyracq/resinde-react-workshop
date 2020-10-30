import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// TODO: import the recipes component

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
      {/* TODO: Create Profile page */}
    </div>
  );
}
