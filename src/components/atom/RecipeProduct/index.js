import React from 'react';
import Black from '../../molecule/Black';
import White from '../../molecule/White';
const RecipeProduct = () => {
  return (
    <div className="flex flex-row justify-evenly pb-10 bg-santorini-light bg-opacity-10">
      <div className="px-px bg-santorini-s_dark" />
      <White />
      <div className="px-px bg-santorini-s_dark" />
      <div className="px-px bg-santorini-s_dark" />
      <Black />
      <div className="px-px bg-santorini-s_dark" />
    </div>
  );
};

export default RecipeProduct;
