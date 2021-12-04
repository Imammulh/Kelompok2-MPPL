import React from 'react';
import illus_1 from '../../../assets/images/Rectangle 50.png';
const CardTop = (product) => {
  return (
    <div className="w-40 flex flex-col mx-10 ">
      <div className="flex items-center">
        <h3 className="card-header py-2">{product.name}</h3>
        <img src={illus_1} className="w-5 h-5 mb-5" />
      </div>
      <p className="card-content mb-10 pb-10 h-10 leading-loose ">
        {product.desc}
      </p>
      <img src={product.img} alt="image product 1" />
    </div>
  );
};

export default CardTop;
