import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import Allergy from "../Images/Veg.jpg";
import AllergyModal from "./ModalSelection/AllergyModal";

const allergyStyles = makeStyles((theme) => ({
  cuisine: {
    width: "10em",
    height: "10em",
    borderRadius: "50%",
    backgroundSize: "cover",

    background: `url(${Allergy})`,
  },

  h1: {
    color: "white",
  },
}));

export default function AllergyOption() {
  //set state for modal

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const classes = allergyStyles();
  return (
    <div>
      <Button className={classes.cuisine} onClick={handleOpen}>
        <h1 className={classes.h1}>ALLERGY</h1>
      </Button>
      <AllergyModal open={open} setOpen={setOpen} />
    </div>
  );
}
