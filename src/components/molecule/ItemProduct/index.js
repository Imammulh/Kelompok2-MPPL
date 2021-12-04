import React from 'react';
import { useNavigate } from 'react-router-dom';
const ItemProduct = (product) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/catalogproduct/${product.id}`);
      }}
      className="cursor-pointer"
    >
      <div className="m-4">
        <div className="w-48 h-80 border-2 flex flex-col items-center">
          <img
            src={product.img}
            className="w-32 h-52 mt-2 object-cover"
          />
          <p className="product-size mt-4 ">{product.size}gr</p>
          <h3 className="product-name mt-2 ">{product.name}</h3>
          <p className="product-price">Rp{String(product.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
