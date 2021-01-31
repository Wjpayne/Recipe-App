import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import Cuisine from "../Images/America.jpg"
import CuisineModal from "./ModalSelection/CuisineModal";

const cuisineStyles = makeStyles((theme) => ({
  cuisine: {
    width: "10em",
    height: "10em",
    borderRadius: "50%",
    backgroundSize: "cover",
    background: `url(${Cuisine})`,
   
  },

  h1: {
    color: "white",
  
    
  },

}));

export default function CuisineOption() {

  //set state for modal

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

 
  const classes = cuisineStyles();
  return (
    <div className = {classes.div}>
      <Button className={classes.cuisine} onClick = {handleOpen}>
        <h1 className={classes.h1}>CUISINE</h1>
      </Button>
      <CuisineModal
      open = {open}
      setOpen = {setOpen}
      />
    </div>
  );
}
