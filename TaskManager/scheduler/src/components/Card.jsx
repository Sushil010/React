import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";


function Card({dataed}) {
  return (
    <div className='relative w-60 h-72 rounded-[40px] bg-zinc-700 p-5 text-white overflow-hidden'>
      <FaFileAlt/>
    
      <p className='mt-5 text-xm'>{dataed.desc}</p>
    
    
      <div className='absolute footer bottom-0 w-full  left-0'>
      
        <div className='flex items-center justify-between py-3 px-8 mb-5'>
          <h5>{dataed.filesize}</h5>
          
          <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>

            {dataed.close ? <IoClose/>:<MdOutlineFileDownload size='1em' color='#fff'/>}
            
          </span>

        </div>

        {dataed.tag.isOpen && (
            <div className='tag bg-green-600 w-full h-10'>
              <h3 className='text-black justify-center items-center flex font-semibold text-sm py-2 '>{dataed.tag.tagTitle}</h3>
            </div>
        )}

        
                 




      </div>

    </div>
  )
}

export default Card