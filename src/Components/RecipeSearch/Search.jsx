import React, { useContext, useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import Recipe from "./Recipe";
import Alert from "./Alert";
import { Button, Grid, makeStyles } from "@material-ui/core";
import ContentContext from "../ContentContext";

const searchStyles = makeStyles(() => ({
  search: {
    backgroundColor: "lightGrey",
    height: "50px",
    width: "100px",
    "&:hover": {
      color: "#fff",
    },
  },
}));

function Search() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const { data, setData } = useContext(ContentContext)

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`;

  const getData = async () => {
    if (query !== "" || data !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Oops! you forget to enter a search word");
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
    setData(e.target.value)
  
  } ;

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const classes = searchStyles();

  return (
    <div className="Search">
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query, data.cuisine}
          autoComplete="on"
          placeholder="Search Food"
        />
        <Button onClick = {onSubmit} className={classes.search}>Search</Button>
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) =>
          

          <Recipe key={uuidv4()} recipe={recipe} />
          )}
      </div>
    </div>
  );
}

export default Search;
