// import React, { useState } from 'react'


// const App = () => {

//   const [bgColor, setbgColor] = useState('')
//   const [textColor,setTextColor]=useState('border-black')
//   const [darkmode, setdarkmode] = useState(false)



 
//   const backgroundChanger=()=>{
//     setdarkmode(prevMode => !prevMode)
    
//     if(!setdarkmode){
//     setbgColor('bg-black')
//     setTextColor('text-white border-white')
//     }
    
//     else{
//       setbgColor('bg-white')
//       setTextColor('text-black border-black')
     
//     }
//   }

//   return (
//     <div className={`text-2xl w-screen h-screen ${bgColor} `}>
      

//       <button onClick={backgroundChanger}  className={`border ${textColor}`}>
//         click me!!
//       </button>


//       </div>
//   )

// }

// export default App


import React, { useState } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState(''); // Background color state
  const [textColor, setTextColor] = useState('border-black'); // Text color state
  const [isDarkMode, setIsDarkMode] = useState(false); // State for toggling mode

  const backgroundChanger = () => {
    setIsDarkMode(pre => !pre); // Toggle the mode state
    if (!isDarkMode) {
      setBgColor('bg-black');
      setTextColor('text-white border-white');
    } else {
      setBgColor('bg-white');
      setTextColor('text-black border-black');
    }
  };

  return (
    <div className={`text-2xl w-screen h-screen ${bgColor}`}>
      <button onClick={backgroundChanger} className={`border ${textColor}`}>
        click me!!
      </button>
    </div>
  );
};

export default App;
