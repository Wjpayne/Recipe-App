import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import Course from "../Images/produce1.jpg"
import CourseModal from "./ModalSelection/CourseModal";

const courseStyles = makeStyles((theme) => ({
  cuisine: {
    width: "10em",
    height: "10em",
    borderRadius: "50%",
    backgroundSize: "cover",
 
    background: `url(${Course})`,
  },

  h1: {
    color: "white",
  },
}));

export default function CourseOption() {

    //set state for modal

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
  const classes = courseStyles();
  return (
    <div>
      <Button className={classes.cuisine} onClick = {handleOpen}>
        <h1 className={classes.h1}>COURSE</h1>
      </Button>
      <CourseModal 
      open = {open}
      setOpen = {setOpen}
      />
    </div>
  );
}
