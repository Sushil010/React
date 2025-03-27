import React, { useState } from 'react'

const App = () => {
   

  const [initial, setInitial] = useState(0)
  const [background, setbackground] = useState("green")
  

  const counter=()=>{
    
    setInitial(initial+1)
  }

  const decrement=()=>{
    setInitial(initial-1)
  }

  return (

    <div style={{background: "background"}}>
      
     <h4>Value of a is {initial}</h4>
     <button onClick={counter}>
      Increase value!!
     </button>
     <button onClick={decrement}>
      Decrease value!!
     </button>
     <button onClick={
      ()=>
      setbackground("red")
      }>
        
        change color!!

     </button>
      
    </div>


  )
}

export default App