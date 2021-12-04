import React from 'react';
import roasteryimg from '../../../assets/images/Rectangle 1image.png';
import biglogo from '../../../assets/images/Intersectlogo.png';
import background_left from '../../../assets/images/background 1.png';
import accs_1 from '../../../assets/images/Rectangle 49.png';
import accs_2 from '../../../assets/images/Rectangle 48.png';
import bg_1 from '../../../assets/images/background 3.png';
import bg_2 from '../../../assets/images/background 2.png';
import vibes_1 from '../../../assets/images/Rectangle 4image.png';
import vibes_2 from '../../../assets/images/Rectangle 5image.png';
import vibes_3 from '../../../assets/images/Rectangle 6image.png';
import vibes_4 from '../../../assets/images/hero-img1.png';
const Hero = () => {
  return (
    <div className="bg-santorini-s_light h-full">
      {/* page-1 */}
      <div className="flex justify-center items-center ">
        <img
          src={roasteryimg}
          alt="gambar roastery"
          className="z-10"
        />
        <div className=" z-20 -ml-20 mb-20">
          <div className=" relative z-30 ml-8">
            <img
              src={biglogo}
              alt="logo sangrai"
              className="w-28 h-28"
            />
          </div>
          <h1 className="header-home bg-header-pattern-2 bg-cover bg-no-repeat pb-10 px-4 bg-clip-text  ">
            micro
            <br />
            coffee
            <br />
            curator &<br />
            roastery
          </h1>
        </div>
        <div className="transform absolute -rotate-90 -left-16 pb-20 flex flex-col place-items-center">
          <img
            src={background_left}
            className="z-0 h-20 w-20 -mb-12"
          ></img>
          <p className="z-10 text-xs ">
            independent micro coffee curator and roastery based on
            bogor
          </p>
        </div>
        <div className="absolute right-80 top-1/4 h-20 w-20">
          <img src={accs_1}></img>
        </div>
        <div className="absolute h-14 w-14 right-1/4 top-36">
          <img src={accs_2} />
        </div>
        <div className="absolute h-8 w-8 right-72 top-44">
          <img src={accs_2} />
        </div>
        <div className="absolute z-0 ">
          <img src={bg_1}></img>
        </div>
        <div className="absolute z-0 right-72 top-96">
          <img src={bg_2} />
        </div>
      </div>
      {/* page-2 */}
      <div className="py-10 px-40 mt-28 ">
        <h2 className="flex header1-home justify-center">
          a little about us
        </h2>
        <div className="py-10 grid grid-cols-6 gap-2 justify-items-center items-center">
          <p className="col-start-1 col-span-2 mx-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lectus sapien id in diam. Blandit leo, scelerisque arcu
            tellus aenean risus, imperdiet diam. Eget tempus, nec ut
            elementum maecenas aenean vitae morbi leo. Id amet mauris
            tellus risus orci libero.
          </p>
          <div className="row-span-2 col-span-2">
            <img src={vibes_1} />
          </div>
          <div className="ml-11 items-center flex">
            <img src={vibes_3} className="w-20 h-auto mr-7" />
            <img src={vibes_4} className="w-20 h-auto mr-7" />
          </div>
          <div className="mr-10 w-20"></div>
          <div className="col-span-2">
            <img src={vibes_2} className="h-60" />
          </div>
          <p className="col-span-2 mx-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lectus sapien id in diam. Blandit leo, scelerisque arcu
            tellus aenean risus, imperdiet diam. Eget tempus, nec ut
            elementum maecenas aenean vitae morbi leo. Id amet mauris
            tellus risus orci libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
