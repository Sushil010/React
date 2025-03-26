import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=0
  // the array index 0 is making a variable named counter with initial value of 0 as in the useState
  //setCoubter is method for controlling counter variable 
  let [counter, setcounter] = useState(0)


  const addvalue =()=>{
    if (counter<3) {
    counter=counter+1
    setcounter(counter)
    }
    // else{
    //   alert("Cannot go above 3")
    // }
    
  }

  const decreaseValue=()=>{
    if (counter>0) {
      counter=counter-1
    setcounter(counter)
    }
    //  else {
    //   alert("Cannot go below 0")
    // }
    
    
  }


  // const addvalue = () => {
  //   value=value+1
  //   console.log("Added value", value)
  // }

  // const decreaseValue=()=>{
  //   value=value-1
  //   console.log("Decreased value",value)
  // }

  return (
    <>
     <h1>hello</h1>
     <h2>Counter : {counter}</h2>

    
    {counter>=3 && <h1>Cannot go beyond this</h1>}

     <button
     onClick={addvalue } >Add Value</button>
    <br/>
     <button
     onClick={decreaseValue}
     >Remove value</button>

     {counter<=0 && <h1>Cannot go below this value</h1>}
    </>
  )
}

export default App
