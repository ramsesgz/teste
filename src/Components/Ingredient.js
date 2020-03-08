import React from "react";

export default ({ ingredient, index }) => {
  return <li key={index}>{ingredient}</li>;
};
