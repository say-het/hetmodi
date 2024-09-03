import React from 'react';
import { useState } from 'react';
import Leftsect from './Leftsect';
import Rightsect from './Rightsect';

const Pagestruct = () => {
const [index,setIndex] = useState(0);

  return (
    <div className="flex h-screen mt-4">
      <div className="w-4/5 flex-none">
      <Leftsect index={index} />
      </div>
      <div className="w-1/5 mt-24">
      <Rightsect setIndex={setIndex} currentIndex={index}/>
      </div>
    </div>
  );
};

export default Pagestruct;
