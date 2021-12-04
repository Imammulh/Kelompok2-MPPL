import React from 'react';
import { useParams } from 'react-router-dom';
import ProductTitle from '../../components/molecule/ProductTitle/index.js';
import Navbar from '../../components/atom/Navbar/index.js';
import Footer from '../../components/atom/Footer/index.js';
import BlendComp from '../../components/molecule/BlendComp/index.js';
import RecipeProduct from '../../components/atom/RecipeProduct/index.js';
import { products } from '../../assets/dummy/product';
const ProductDetail = () => {
  let params = useParams();
  let product = products.find(
    (product) => product.id === parseInt(params.productId, 10),
  );
  return (
    <div className="bg-santorini-s_light">
      <Navbar />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col w-7/12 ml-10">
            <div className="flex flex-row">
              <ProductTitle {...product} />
              <div className="flex flex-col">
                <BlendComp />
                <BlendComp />
              </div>
            </div>
            <div className="bg-santorini-s_dark py-px h-px my-10"></div>
            <p className="w-11/12 normal-product">
              Aliqua laborum qui dolor proident sunt irure sit
              deserunt tempor aliqua. Id laborum officia elit est
              officia commodo deserunt. Ipsum esse nostrud enim
              officia mollit consequat ipsum culpa velit elit ipsum
              duis dolore. Magna adipisicing adipisicing fugiat quis
              enim ullamco pariatur eu consequat sunt nisi occaecat
              ea. Est consectetur exercitation consequat quis mollit.
              <br /> Pariatur do et occaecat est excepteur labore amet
              consectetur ex reprehenderit sit nostrud. Culpa non
              magna quis laborum irure cillum ea sunt qui aliqua amet
              consequat sunt. Adipisicing aute elit aliqua dolore
              irure minim amet. Aute cupidatat ullamco laborum veniam
              commodo minim magna velit nulla qui. Nostrud irure irure
              tempor consequat id consectetur quis. Et aliquip
              exercitation laborum ullamco irure ipsum nisi aliquip
              incididunt ad aliqua consectetur fugiat duis. Laborum
              aute fugiat incididunt ipsum tempor esse ea
              reprehenderit consectetur consequat excepteur duis. Nisi
              consectetur duis mollit dolore aute tempor mollit magna
              nisi duis. Anim ea id in voluptate non cupidatat laboris
              nulla consectetur commodo officia. Ipsum aute amet
              proident eiusmod.
            </p>
          </div>
          <div className="px-px w-px bg-santorini-s_dark"></div>
          <img
            src={`/${product.img}`}
            className="w-1/3 height-image-detail object-cover"
          />
        </div>
        <RecipeProduct className="mt-10" />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
