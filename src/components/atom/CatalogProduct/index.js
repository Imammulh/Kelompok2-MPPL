import { React } from 'react';
import ItemProduct from '../../molecule/ItemProduct';
import { ReactComponent as HeaderProd } from '../../../assets/svg/product.svg';
import Navbar from '../Navbar';

const CatalogProduct = (products) => {
  return (
    <div>
      <Navbar />
      <div className="mx-10">
        <HeaderProd />
        <h1 className="font-Laviossa text-5xl text-santorini-med tracking-swidest">
          catalogue
        </h1>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 place-items-center w-2/4 ">
          {Object.values(products).map((product) => {
            return <ItemProduct key={product.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogProduct;
