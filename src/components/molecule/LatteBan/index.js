import React from 'react';
import Latte from '../../../assets/images/lat.png';
const LatteBan = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 relative">
        <div className="h-44 w-44 border-2 p-5 pt-4 order-1">
          <img src={Latte} />
        </div>
        <p className="z-10 order-1 -mt-24 h-6 w-44 bg-santorini-s_light text-center tracking-widest normal-product">
          latte
        </p>
      </div>
      <p className="recipe-text">180 ml /</p>
      <p className="recipe-text">cup</p>
    </div>
  );
};

export default LatteBan;
