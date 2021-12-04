import React from 'react';
import { ReactComponent as Temp } from '../../../assets/svg/temperature.svg';
const TempBan = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="grid bg-gradient-radial from-santorini-light via-transparent to-transparent w-32 h-32 rounded-full items-center justify-center">
        <Temp className="w-16 h-16" />
      </div>
      <div>
        <p className="normal-product">Brew Time</p>
        <p className="text-black header2-product">37 s</p>
      </div>
    </div>
  );
};

export default TempBan;
