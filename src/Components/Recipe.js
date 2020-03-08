import React from "react";
import Ingredients from "./Ingredients";
export default ({ recipe = {} }) => {
  const name = recipe.nome;
  const ingredients = recipe.secao && recipe.secao[0].conteudo;
  return (
    <>
      <h3>{name}</h3>
      <Ingredients ingredients={ingredients} />
    </>
  );
};
