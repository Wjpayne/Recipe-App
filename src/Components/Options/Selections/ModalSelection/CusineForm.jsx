import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const cuisineStyles = makeStyles(() => ({
  form: {
    marginLeft: "20px",
    marginTop: "50px",
  },
  label: {
    position: "absolute",
    top: "-40%",
  },
  save: {
    position: "absolute",
    right: "5%",
    bottom: "-90%",
    backgroundColor: "grey",
    color: "white",
    width: "10em",
    "&:hover": {
      backgroundColor: "white",
      color: "grey",
    },
  },

  title: {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "30px",
  },
}));

export default function CuisineForm() {
  const classes = cuisineStyles();
  const [state, setState] = React.useState({
    american: false,
    italian: false,
    asian: false,
    mexican: false,
    southern: false,
    french: false,
    indian: false,
    chinese: false,
    mediterranean: false,
    greek: false,
    spanish: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.div}>
      <div className={classes.title}>Cuisine</div>

      <FormGroup aria-label="position" row className={classes.form}>
        <FormControlLabel
          control={
            <Switch
              checked={state.american}
              onChange={handleChange}
              name="american"
            />
          }
          label="American"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.italian}
              onChange={handleChange}
              name="italian"
            />
          }
          label="Italian"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.asian}
              onChange={handleChange}
              name="asian"
            />
          }
          label="Asian"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.mexican}
              onChange={handleChange}
              name="mexican"
            />
          }
          label="Mexican"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.southern}
              onChange={handleChange}
              name="southern"
            />
          }
          label="Southern and Soul Food"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.french}
              onChange={handleChange}
              name="french"
            />
          }
          label="French"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.indian}
              onChange={handleChange}
              name="indian"
            />
          }
          label="Indian"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.chinese}
              onChange={handleChange}
              name="chinese"
            />
          }
          label="Chinese"
        />

        <FormControlLabel
          control={
            <Switch
              checked={state.mediterranean}
              onChange={handleChange}
              name="mediterranean"
            />
          }
          label="Mediterranean"
        />

        <FormControlLabel
          control={
            <Switch
              checked={state.greek}
              onChange={handleChange}
              name="greek"
            />
          }
          label="Greek"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.spanish}
              onChange={handleChange}
              name="spanish"
            />
          }
          label="Spanish"
        />

        <FormHelperText className={classes.formHelper}>
          Choose one or several cuisines
        </FormHelperText>
      </FormGroup>
    </div>
  );
}
