import React,{useId} from 'react'


 const Input=React.forwardRef(function Input({

    label,
    type="text",
    className="",
    ...props
 },ref)
 {
    const id=useId()
    
    return label && <label 
    htmlFor="{id}"
    className='inline-block mb-1 pl-1'
    >

        {label}
        
    </label>
 })

export default Input