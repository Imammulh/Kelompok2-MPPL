import React from 'react';

const BlendComp = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-72 h-32 items-end">
      <div className="row-span-2">
        <div className="grid bg-gradient-radial from-santorini-light via-transparent to-transparent w-32 h-32 rounded-full text-center items-center blend-text">
          70%
        </div>
      </div>
      <div className="order-2 blend-name">Kerinci</div>
      <p className="order-4 normal-product self-start">Wethull</p>
    </div>
  );
};

export default BlendComp;
