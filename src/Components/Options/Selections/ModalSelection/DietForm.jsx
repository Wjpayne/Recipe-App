import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const dietStyles = makeStyles(() => ({
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

export default function DietForm() {
  const classes = dietStyles();
  const [state, setState] = React.useState({
    vegetarian: false,
    lowFodMap: false,
    vegan: false,
    paleo: false,
    pescetarian: false,
    ketogenic: false,
    mediterranean: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className="cuisine-container">
        <div className= {classes.title}>Diet</div>

        <FormGroup aria-label="position" row className={classes.form}>


          <FormControlLabel
            control={
              <Switch
                checked={state.vegetarian}
                onChange={handleChange}
                name="vegetarian"
              />
            }
            label="Vegetarian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.lowFodMap}
                onChange={handleChange}
                name="lowFodMap"
              />
            }
            label="Low-FodMap"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.vegan}
                onChange={handleChange}
                name="vegan"
              />
            }
            label="Vegan"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.paleo}
                onChange={handleChange}
                name="paleo"
              />
            }
            label="Paleo"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.pescetarian}
                onChange={handleChange}
                name="pescetarian"
              />
            }
            label="Pescetarian"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.ketogenic}
                onChange={handleChange}
                name="ketogenic"
              />
            }
            label="Ketogenic"
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

          <FormHelperText className={classes.formHelper}>
            Choose one or several diets
          </FormHelperText>
          
        </FormGroup>
      </div>
    </div>
  );
}