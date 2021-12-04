import React from 'react';
import bannerimage from '../../../assets/images/product-img.png';
import illus_1 from '../../../assets/images/Rectangle 50.png';
const BannerLP = () => {
  return (
    <div className="mr-10">
      <img src={bannerimage} className="w-40 "></img>
      <div className="mt-16 flex items-center">
        <h3 className="header2-home">
          Our <br />
          Products
        </h3>
        <img src={illus_1} className="w-5 h-5 mb-5" />
      </div>
    </div>
  );
};

export default BannerLP;
