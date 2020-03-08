import React from "react";
import Recipe from "./Recipe";
export default ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe, index) => {
        return <Recipe recipe={recipe} key={index} index={index} />;
      })}
    </ul>
  );
};
