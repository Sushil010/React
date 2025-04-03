import React from 'react'

const Card = ({user}) => {
  console.log(user.username)
  return (
    <>
    <div className='p-10 bg-green-400 h-full w-full'>
      
        <div className='bg-black text-amber-50 p-10 border border-amber-400 text-center rounded-2xl inline-block
         '>
          <div className=' flex justify-center mb-3 '>
            <img className='h-[50px] w-[50px]' src={user.image} alt="" />
          </div>
            <h3>{user.username},{user.surname}</h3>
            <h4 className='text-yellow-400'>{user.profession}</h4>
            <h4>{user.age}</h4>
            <button className='border cursor-pointer p-1.5 border-blue-600 rounded-2xl'>Add Friend</button>


        </div>
    </div>
    </>
  )
}

export default Card