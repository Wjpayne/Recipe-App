import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const ingredientStyles = makeStyles(() => ({

  button: {
    marginTop: "50px",
    backgroundColor: "lightGrey",
    "&:hover": {
      color: "#fff",
    },
  },



}))

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  const classes = ingredientStyles()

  return (
    <div className="recipe">

      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer" className = {classes.url}>
        GO TO RECIPE
      </a>
      <Button className = {classes.button} onClick={() => setShow(!show)}>ingredients</Button>
      {show && <RecipeDetails ingredients={ingredients} />}
    
    </div>
  );
};

export default Recipe;