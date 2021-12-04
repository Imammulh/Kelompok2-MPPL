import React from 'react';
import illustration from '../../../assets/images/Rectangle 48.png';
const ProductTitle = (product) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 items-center ml-2 z-1 -mb-5  ">
        <h2 className="header2-product z-0">{product.category}</h2>
        <img src={illustration} className="h-6 w-6" />
      </div>
      <h1 className="header1-product h-auto mr-32">{product.name}</h1>
      <p className="price-product py-5">Rp.{product.price} / Kg</p>
      <div className="border-2 border-santorini-s_dark p-2 w-64 mt-8 underline link-product">
        <a href={product.link}>check on tokopedia</a>
      </div>
    </div>
  );
};

export default ProductTitle;
