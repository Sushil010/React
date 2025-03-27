import React, { useState } from 'react'

const App = () => {
   

  const [initial, setInitial] = useState(0)
  
  const counter=()=>{
    
    setInitial(initial+1)
  }

  return (

    <div>
      
     <h4>Value of a is {initial}</h4>
     <button onClick={counter}>
      Increase value!!
     </button>
      
    </div>


  )
}

export default App