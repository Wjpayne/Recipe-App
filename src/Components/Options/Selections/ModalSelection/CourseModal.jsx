import { Fade, IconButton, makeStyles, Modal, Button } from "@material-ui/core";
import React from "react";
import CourseForm from './CourseForm';
import CancelIcon from "@material-ui/icons/Close";

const modalStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "white",
    width: "700px",
    height: "400px",
    outline: "none",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  cuisineModal: {
    display: "inline-flex",
    outline: "none",
  },

  cancel: {
    float: "right",
    
  },

  save: {
    position: "absolute",
    right: "5%",
    bottom: "20px",
    backgroundColor: "grey",
    color: "white",
    width: "10em",
    "&:hover": {
      backgroundColor: "white",
      color: "grey",
    },
  },
}));

export default function CuisineModal({ open, setOpen }) {
  const classes = modalStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.div}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.cuisineModal}
        open={open}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <IconButton
              color="inherit"
              aria-label="close modal"
              edge="start"
              onClick={handleClose}
              className={classes.cancel}
            >
              <CancelIcon />
            </IconButton>
            <CourseForm />

            <Button className={classes.save}>Save</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}