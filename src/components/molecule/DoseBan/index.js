import React from 'react';
import { ReactComponent as Dose } from '../../../assets/svg/dose.svg';
const DoseBan = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="grid bg-gradient-radial from-santorini-light via-transparent to-transparent w-32 h-32 rounded-full items-center justify-center">
        <Dose className="w-16 h-16" />
      </div>
      <div>
        <p className="normal-product">Dose</p>
        <p className="text-black header2-product">18 Gr</p>
      </div>
    </div>
  );
};

export default DoseBan;
