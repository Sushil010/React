import React from 'react';
import { FaFileAlt } from "react-icons/fa";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[12px] bg-red-800 p-5 text-white overflow-hidden'>
    <FaFileAlt/>
    <p className='mt-5 text-xm'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    <div className='absolute footer bottom-0 w-full h-20 bg-black left-0'></div>

    </div>
  )
}

export default Card