import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import Diet from "../Images/paleo.jpg";
import DietModal from "./ModalSelection/DietModal"

const dietStyles = makeStyles((theme) => ({
  cuisine: {
    width: "10em",
    height: "10em",
    borderRadius: "50%",
    backgroundSize: "cover",

    background: `url(${Diet})`,
  },

  h1: {
    color: "white",
  },
}));

export default function DietOption() {
  const classes = dietStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button className={classes.cuisine} onClick={handleOpen}>
        <h1 className={classes.h1}>DIET</h1>
      </Button>
      <DietModal open={open} setOpen={setOpen} />
    </div>
  );
}
