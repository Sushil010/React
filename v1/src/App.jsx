import React from 'react'

const App = () => {
  
  const user="Name1"

  const chanegeUsername=()=>{
    user="Name2"
  }
  return (
    <div>
      
    Hello, {user}
    
    <button onClick={chanegeUsername}>
      Change Username
    </button>


    </div>
  )
}

export default App