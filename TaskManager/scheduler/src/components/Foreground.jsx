import React, { useRef } from 'react';
import Card from './card'

function Foreground() {
  
  const ref=useRef(null);



  const data=[
    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:true,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"green"
      }
    },


    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:true,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"green"
      }
    },



    {
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize:".9mb",
      close:true,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"green"
      }
    },
]

  
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-[3rem] p-4 flex-wrap'>

    


    {data.map((item,index)=>(
        <Card dataed={item} reference={ref}/>
    ))}

        
    </div>
  )
}

export default Foreground