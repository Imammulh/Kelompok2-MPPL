import React from 'react';
import AmrcanoBan from '../AmrcanoBan';
import BrewTBan from '../BrewTBan';
import DoseBan from '../DoseBan';
import TempBan from '../TempBan';
import YieldBan from '../YieldBan';

const Black = () => {
  return (
    <div className="w-5/12 flex flex-col gap-8">
      <div className="py-px bg-santorini-s_dark mb-5" />
      <div className="flex flex-row justify-between items-center">
        <h2 className="header3-product">Black</h2>
        <div className="flex flex-col">
          <p>batch date :</p>
          <div className="border-2 border-santorini-s_dark px-16 py-2">
            07/07/2020
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-center">
        <BrewTBan />
        <DoseBan />
        <YieldBan />
        <TempBan />
      </div>
      <div className="flex flex-row justify-evenly">
        <AmrcanoBan />
      </div>
    </div>
  );
};

export default Black;
