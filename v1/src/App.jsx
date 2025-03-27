// import React, { useState } from 'react'

// const App = () => {
   

//   const [initial, setInitial] = useState(0)
//   const [background, setbackground] = useState("green")
  

//   const counter=()=>{
    
//     setInitial(prev=>prev+1)
//   }

//   const decrement=()=>{
//     setInitial(prev=>prev-1)
//   }

//   return (

//     <div style={{background: background}}>
      
//      <h4>Value of a is {initial}</h4>
//      <button onClick={counter}>
//       Increase value!!
//      </button>
//      <button onClick={decrement}>
//       Decrease value!!
//      </button>
//      <button onClick={
//       ()=>
//       setbackground(prev=>(prev==="green"?"red":"green"))
//       }>
        
//         change color!!

//      </button>
      
//     </div>


//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//   const [lighter, setlighter] = useState("yellow")
//   const [icon, setIcon] = useState("light💡")
  
//   const light=()=>{
//     setlighter(prev=>(prev==="yellow"?"black":"yellow"))
//   }

//   const changeIcon=()=>{
//     setIcon(prev=>(prev==="light💡"?"dark⚫":"light💡"))
//   }

//   const allUpdater=()=>{
//     light();
//     changeIcon();
//   }


//   return (
    
    
//     <div style={{background:lighter,width:"full",height:"100vh"}}>

//     <button onClick={allUpdater} >
//       {icon} mode
//     </button>






//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [background, setBackground] = useState("green")
  const [icon, setIcon] = useState("green🟩")
  
  const updateCounter=()=>{
    setCounter(prev=>prev+1)
  }
  
  const changeIcon=()=>{
    setIcon(prev=>(prev==="green🟩"?"red🔴":"green🟩"))
  }

  const changeBackground=()=>{
    setBackground(prev=>(prev==="green"?"red":"green"))
  }


  const increaseHandler=()=>{
    updateCounter();
    changeBackground();
    changeIcon();
  }

  const decreaseCounter=()=>{
    setCounter(prev=>prev-1)
  }
  
  const decreaseHandler=()=>{
    decreaseCounter();
    changeBackground();
    changeIcon();
  }
  
  
  return (
    <div style={{background:background,width:"full",height:"100vh"}}>
      
      <button onClick={increaseHandler}>
        increase {counter} {icon}
      </button>

      <button onClick={decreaseHandler}>
        decrease {counter} {icon}
      </button>
      
    </div>
  )
}

export default App