import React from 'react'

const Button = ({value}) => {
  
    const submitter=()=>{
        console.log("retreiving")
    }

    return (

    <div className=''>

        
        
        <button onClick={submitter} className='border p-1 cursor-pointer active:scale-90 border-amber-700 bg-green-700'>
            {value}
        </button>

    </div>
  )
}

export default Button