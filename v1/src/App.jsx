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
// import React, { useState } from 'react'



// const App = () => {

//   const [username, setUsername] = useState('')

//   const submitter=(e)=>{
//     e.preventDefault()
//     console.log(username)
//     setUsername('')
//   }

//   return (


//     <div>
      
      
//       <form 
//       className='flex m-2 gap-2' 
//       action=""
//       onSubmit={
//         submitter
//       }
      
//       >

//       <input className=' p-2 border border-black' type="text"
//        placeholder='Enter Text'
//        value={username}
//       onChange={(e)=>{
//         setUsername(e.target.value)
//       }}
      
       
//        />
      
//       <button className='bg-green-500 p-2 rounded-2xl border border-black cursor-pointer'>
//         Submit!!
//       </button>


//       </form>
      



//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'



// const App = () => {
//   const [fields, setFields] = useState("Hello world!!")
//   const [mail, setMail] = useState("")
  
//   const applyChanger=()=>{
    
//   }

//   return (
//     <div className='bg-black w-full h-[100vh]'>

//       <form className='p-2' action="">
    
//         <input
//         value={fields}
//         onChange={(e)=>{
//           setFields(e.target.value)
//           // console.log(e)
//           // setFields("")
//           // setFields((prev) => prev + e.target.value.slice(prev.length));
//           // setFields(e.target.value)
//         }}
//         className='border border-yellow-600 p-2 text-white'
//         type="text"  
//         placeholder='Enter here'/>

//         <button className='border m-1 p-2 border-white cursor-pointer text-white'>
//           Submit!!
//         </button>


//       </form>

//       <form className='p-2' action="">
    
//       <input
//     className='border border-yellow-600 p-2 text-white'
//     value={mail}
//     onChange={(e)=>{
//       setMail(e.target.value)
//     }}
//     type="text"  
//     placeholder='Enter mail'/>

//     <button className='border m-1 p-2 border-white cursor-pointer text-white'>
//       Submit!!
//     </button>


//   </form>


//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Card from './components/Card'


// const App = () => {

//  var data= [
//     {
//       "username": "john_doe",
//       "surname": "Doe",
//       "profession": "Software Engineer",
//       "age": 28,
//       "image": "https://via.placeholder.com/150"
//     },
//     {
//       "username": "jane_smith",
//       "surname": "Smith",
//       "profession": "Graphic Designer",
//       "age": 25,
//       "image": "https://via.placeholder.com/150"
//     },
//     {
//       "username": "michael_johnson",
//       "surname": "Johnson",
//       "profession": "Data Analyst",
//       "age": 30,
//       "image": "https://via.placeholder.com/150"
//     },
//     {
//       "username": "emily_williams",
//       "surname": "Williams",
//       "profession": "Marketing Manager",
//       "age": 27,
//       "image": "https://via.placeholder.com/150"
//     },
//     {
//       "username": "david_brown",
//       "surname": "Brown",
//       "profession": "Frontend Developer",
//       "age": 26,
//       "image": "https://via.placeholder.com/150"
//     }
//   ]
  
  
//   return (
//     <>
//     <div className='grid grid-cols-3 justify-center items-center'>
   
//     {/* data.map(function{

//     }) */}

//     {/* {data.map((user,index)=>(
//         <Card key={index} user={user}/>
//     ))} */}

     
//      {data.map((user,index)=>(
//       <Card user={user} key={index}/>
//      ))}
     

//     </div>
   
    
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [data, setData] = useState([])
//   const [counter, setCounter] = useState(6)

//   const extractor=async ()=>{
//     var response= await axios.get('https://picsum.photos/v2/list')
//     setData(response.data)
//     console.log(response.data)
//   }

//   const loader=()=>{
//     setCounter(prev=>prev+6)
//   }
  
//   return (
//     <div className='bg-[#367] w-full h-full text-black'>

//         <button onClick={extractor}
//             className='bg-amber-400 ml-2 mt-2 active:scale-90 p-2 '>
//             Get data
//         </button>
//       <div className='grid grid-cols-3  p-2 justify-center items-center'>
       
//         {data.slice(0,counter).map(function(item,index){
//         return <div key={index} className='bg-black ml-1 mb-3 text-amber-50 p-7 border border-amber-400 text-center rounded-2xl inline-block'>
//           <div className='flex justify-center mb-3 '>
//           <img className='h-[150px] w-[150px] rounded-2xl' src={item.download_url} alt="" />
//           </div>
          
//           <h3>{item.id}. {item.author}</h3>
//           <a href={item.url} target='_blank' rel="noopener noreferrer">
//           <button className='border mt-2 h-10 w-16 active:scale-90 bg-lime-600 border-amber-400 cursor-pointer p-1 rounded-2xl'>
//            Visit 
//           </button>  
//           </a>

//         </div>
//       })}
//       </div>

      
      
//       {counter<data.length &&(
//         <div className='flex justify-center'>
//         <button onClick={loader} className='bg-amber-50 flex mt-3 mb-3 cursor-pointer rounded-2xl p-2'>
//           Load More
//         </button>
//         </div>
//       )}

//     </div>
//   )
// }

// export default App




// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Products from "../pages/Products";
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <div className='bg-black text-white w-full h-[100vh]'>
      
//       <Navbar/>
      
//       <Routes>

//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/products' element={<Products/>}/>



//       </Routes>
      
    
//     </div>
//   )
// }

// export default App



// import React, { useContext } from 'react'
// import Contact from '../pages/Contact'
// import Products from '../pages/Products'
// import { DataContext } from './context/UserContext'
// const App = () => {
//   const data = useContext(DataContext)
//   return (
//     <div className='bg-black text-white h-[100vh]'>
      
//       App {data}
      
//       <Contact/>
//       <Products/>
      
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
  
//   const [counter, setCounter] = useState(0)
  
//   useEffect(() => {
//     if (counter>5){
//       <div className='bg-yellow-600 text-2xl text-black'>
//         Counter init
//       </div>
//     }
    

//   }, [counter])
  


//   return (
//     <div className='bg-black text-white h-[100vh] w-full'>
      
//       <div className='p-4'>
//         <button
//          onClick={()=>{
//           setCounter(prev=>(prev+1))
//          }}
//          className='p-1 cursor-pointer border border-white active:scale-90'>
//             Increase: {counter}
//         </button>
//       </div>

         


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