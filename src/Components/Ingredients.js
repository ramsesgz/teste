import React from "react";
import Ingredient from "./Ingredient";
export default ({ ingredients = [] }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => {
        return <Ingredient key={index} index={index} ingredient={ingredient} />;
      })}
    </ul>
  );
};
