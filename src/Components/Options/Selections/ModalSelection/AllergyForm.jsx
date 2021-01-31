import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const allergyStyles = makeStyles(() => ({
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

export default function AllergyForm() {
  const classes = allergyStyles();
  const [state, setState] = React.useState({
    gluten: false,
    wheat: false,
    dairy: false,
    peanut: false,
    treeNut: false,
    soy: false,
    seafood: false,
    sulfite: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className="cuisine-container">
        <div className= {classes.title}>Allergy</div>

        <FormGroup aria-label="position" row className={classes.form}>


          <FormControlLabel
            control={
              <Switch
                checked={state.gluten}
                onChange={handleChange}
                name="gluten"
              />
            }
            label="Gluten-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.wheat}
                onChange={handleChange}
                name="wheat"
              />
            }
            label="Wheat-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.dairy}
                onChange={handleChange}
                name="dairy"
              />
            }
            label="Dairy-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.peanut}
                onChange={handleChange}
                name="peanut"
              />
            }
            label="Peanut-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.treeNut}
                onChange={handleChange}
                name="treeNut"
              />
            }
            label="Tree Nut-Free"
          />
          <FormControlLabel
            control={
              <Switch checked={state.soy} onChange={handleChange} name="soy" />
            }
            label="Soy-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.seafood}
                onChange={handleChange}
                name="seafood"
              />
            }
            label="Seafood-Free"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.sulfite}
                onChange={handleChange}
                name="sulfite"
              />
            }
            label="Sulfite-Free"
          />

          <FormHelperText className={classes.formHelper}>
            Choose one or several allergans.
          </FormHelperText>
        </FormGroup>
      </div>
    </div>
  );
}
