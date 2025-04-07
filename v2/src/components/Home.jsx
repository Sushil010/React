import React, { useState } from 'react'
import Button from './Button'

const Home = () => {
    const [value, setValue] = useState("")
    
    const setChanger=(e)=>{
        e.preventDefault()
        console.log(value)
        setValue('')
        
    }
    
  return (
    <>
    
    <div className='p-4 gap-1.5 flex'>
        <div className=''>
            <form 
            action=""
            onSubmit={setChanger}
            >
                <input 
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value)
                }}
                
                className='border border-white p-1' 
                type="text" 
                placeholder='Enter items' />


            </form>
            
        </div>
        <Button value={"Submit"}/>
        {/* <Button value={"Delete"}/> */}
        
        
    </div>
    
    </>
    
  )
}

export default Home