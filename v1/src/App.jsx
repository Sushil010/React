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



// import React, { useState } from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const [background, setBackground] = useState("green")
//   const [icon, setIcon] = useState("green🟩")
  
//   const updateCounter=()=>{
//     setCounter(prev=>prev+1)
//   }
  
//   const changeIcon=()=>{
//     setIcon(prev=>(prev==="green🟩"?"red🔴":"green🟩"))
//   }

//   const changeBackground=()=>{
//     setBackground(prev=>(prev==="green"?"red":"green"))
//   }


//   const increaseHandler=()=>{
//     updateCounter();
//     changeBackground();
//     changeIcon();
//   }

//   const decreaseCounter=()=>{
//     setCounter(prev=>prev-1)
//   }
  
//   const decreaseHandler=()=>{
//     decreaseCounter();
//     changeBackground();
//     changeIcon();
//   }
  
  
//   return (
//     <div style={{background:background,width:"full",height:"100vh"}}>
      
//       <button onClick={increaseHandler}>
//         increase {counter} {icon}
//       </button>

//       <button onClick={decreaseHandler}>
//         decrease {counter} {icon}
//       </button>
      
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'

// const App = () => {
  
//   const [light, setLight] = useState("black")

  // const [color, setColor] = useState("red🔴")
  // const [yellow, setYellow] = useState("yellow")
  // const [green, setGreen] = useState("green")

  // const updateTraffic=()=>{
  //   setColor(prev=>(prev==="red"?"yellow":"green"))
  // }

//   return (
//     <div style={{background:light,height:"100vh", display:"grid",justifyContent:"center",alignItems:"center"}}>
      
      
//       <div
//       onClick={()=>{
//         // setLight(prev=>(prev==="red"?"yellow":"red"))
//         setLight("red")
//       }}
//       >
//         <button style={{background:"red", width:"50px",height:"50px",borderRadius:"50%"}}>

//         </button>
//       </div>


//       <div
//       onClick={()=>{
//         setLight("yellow")
//       }}
//       >
//         <button style={{background:"yellow", width:"50px",height:"50px",borderRadius:"50%"}}>

//         </button>
//       </div>


//       <div
//       onClick={()=>{
//         setLight("green")
//       }}
      
//       >
//         <button style={{background:"green", width:"50px",height:"50px",borderRadius:"50%"}}>

//         </button>
//       </div>

      


//     </div>
//   )
// }

// export default App


// import React from 'react'



// const App = () => {
//   const handler=(e)=>{
//     e.preventDefault() 
//     console.log("submitted!!!")
//     // console.log("submitted!!")
//   }
  
//   return (
//     <div className=''>

//       {/* <form onSubmit={(e)=>{
//         captureDetails(
//           e.preventDefault(),
//           console.log("Submitted field!!!")
//         )
//       }} 
      
//       className='p-4'> */}
//       <form onSubmit={
//         (e)=>{
//           // e.preventDefault()
//           // handler()
//           handler(e)
//         }
//       } 
      
//       className='p-4'>
//       <input className='p-2 text-black border-2 border-black rounded-2xl' type="text" placeholder='Enter name' /> 
//       <button className='m-2 cursor-pointer p-2 border-2 border-black rounded-2xl'>
//         Submit!!
//       </button>
//       </form>
//     </div>
//   )
// }

// export default App
import React from 'react'



const App = () => {
  return (
    <div>App</div>
  )
}

export default App