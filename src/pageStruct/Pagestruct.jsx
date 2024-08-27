import React from 'react';
import Leftsect from './Leftsect';
import Rightsect from './Rightsect';

const Pagestruct = () => {
  return (
    <div className="flex h-screen mt-24">
      <div className="w-4/5 flex-none">
        <Leftsect />
      </div>
      <div className="w-1/5">
        <Rightsect />
      </div>
    </div>
  );
};

export default Pagestruct;
