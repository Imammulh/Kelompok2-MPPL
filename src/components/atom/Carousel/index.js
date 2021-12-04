import React from 'react';
import CardTop from '../../molecule/CardTop';
import CardBot from '../../molecule/CardBot';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { products } from '../../../assets/dummy/product';
import ArrowLeft from '../../molecule/Arrow/ArrowLeft';
import ArrowRight from '../../molecule/Arrow/ArrowRight';
import './arrowonbottom.css';
import './hidescrollbar.css';
import BannerLP from '../../molecule/BannerLP';

const Carousel = () => {
  return (
    <div className="flex justify-center mt-48">
      <BannerLP />
      <div className="w-3/4 ">
        <ScrollMenu LeftArrow={ArrowLeft} RightArrow={ArrowRight}>
          {products.map((product, index) => {
            if (index % 2 === 0) {
              return (
                <CardTop
                  key={product.id}
                  itemId={product.id}
                  name={product.name}
                  img={product.img}
                  desc={product.desc}
                />
              );
            } else {
              return (
                <CardBot
                  key={product.id}
                  name={product.name}
                  itemId={product.id}
                  img={product.img}
                  desc={product.desc}
                />
              );
            }
          })}
        </ScrollMenu>
      </div>
    </div>
  );
};

export default Carousel;
