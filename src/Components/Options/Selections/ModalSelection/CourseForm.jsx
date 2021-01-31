import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const courseStyles = makeStyles(() => ({
  form: {
    marginLeft: "20px",
    marginTop: "50px",
  },
  label: {
    position: "absolute",
    top: "-40%",
  },

  title: {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "30px",
  },
}));

export default function CourseForm() {
  const classes = courseStyles();
  const [state, setState] = React.useState({
    breakfast: false,
    brunch: false,
    lunch: false,
    dinner: false,
    dessert: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className="cuisine-container">
        <div className={classes.title}>Course</div>

        <FormGroup aria-label="position" row className={classes.form}>
          <FormControlLabel
            control={
              <Switch
                checked={state.breakfast}
                onChange={handleChange}
                name="breakfast"
              />
            }
            label="Breakfast"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.brunch}
                onChange={handleChange}
                name="brunch"
              />
            }
            label="Brunch"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.lunch}
                onChange={handleChange}
                name="lunch"
              />
            }
            label="Lunch"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.dinner}
                onChange={handleChange}
                name="dinner"
              />
            }
            label="Dinner"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.dessert}
                onChange={handleChange}
                name="dessert"
              />
            }
            label="Dessert"
          />

          <FormHelperText className={classes.formHelper}>
            Choose a course.
          </FormHelperText>
        </FormGroup>
      </div>
    </div>
  );
}
