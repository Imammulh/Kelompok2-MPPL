import React from 'react';
import CatalogProduct from '../../components/atom/CatalogProduct';
import { products } from '../../assets/dummy/product';

const Catalog = () => {
  return (
    <div>
      <CatalogProduct {...products} />
    </div>
  );
};

export default Catalog;
