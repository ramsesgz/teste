import React, { useEffect, useState } from "react";
import "./styles.css";
import Recipes from "./Recipes.js";
import RecipeList from "./Components/RecipeList";
import Fuse from "fuse.js";
var options = {
  shouldSort: true,
  threshold: 0.8,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 4,
  keys: [{ name: "nome", weight: 0.3 }, { name: "secao.conteudo", weight: 0.7 }]
};
var fuse = new Fuse(Recipes, options);

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState("");
  const handleSearch = async ev => {
    let keyword = ev.target.value;
    var result = await fuse.search(keyword);
    console.log(result);
    setRecipes(result);
    setSearchRecipe(keyword);
  };
  const doSearch = async () => {};
  return (
    <div className="App">
      <h3>Buscando receitas que tenha: {searchRecipe}</h3>
      <input value={searchRecipe} onChange={handleSearch} onBlur={doSearch} />
      <ul>
        <RecipeList recipes={recipes} />
      </ul>
    </div>
  );
}
