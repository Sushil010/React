import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const {userid}=useParams()
  return (
    <div className='py-7 flex justify-center items-center'>

        User: {userid}

    </div>
  )
}

export default User