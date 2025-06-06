import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const App = () => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)
  
  useEffect(() => {
    fetcher()
  }, [])
  

  const fetcher=async()=>{
    
  try {
    setLoader(true)
    // const datas=await axios.get("https://api.nasa.gov/planetary/apod?api_key=BgD9eI0wcHkqJK6UU0epgYUYzMamRC7MiWrPTl6E")
    const datas=await axios.get("https://api.nasa.gov/planetary/apod?api_key=BgD9eI0wcHkqJK6UU0epgYUYzMamRC7MiWrPTl6E&start_date=2017-07-08&end_date=2017-07-10")
    setData(datas.data)
    console.log(datas)
      }


 catch (error) {
  console.log(error)
  }
  
  finally{
    setLoader(false)
  }
}

 

  return (
    <div className='w-full h-full bg-gray-200'>
      <div className='px-4 py-5'>

        {/* <button onClick={fetcher} className='bg-green-500 active:scale-90 border cursor-pointer border-amber-400 p-2 '>
          Get Data
        </button> */}

        {/* {data.map(function(values){
          return <h1>{values.date}</h1>
        })} */}


        {/* {loader?
        (<div className='flex justify-center items-center'>
          <CircularProgress color="success"/>
        </div>)
        
        :
        <>
        <h1 className='text-blue-800'>{data.title}</h1>
        <img src={data.url} alt="" style={{maxWidth:"50%"}}/>
       
        </>
        } */}



        {loader?
        (<div className='flex justify-center items-center'>
          <CircularProgress color="success"/>
        </div>)
        :
          <>
          
         { data.map(function(value){
            return(
                    <>
                    <h2 className='flex justify-left py-7 items-center text-2xl text-blue-800'>{value.title}</h2>
                   <img src={value.hdurl} alt="" style={{width:"50%"}} />
                    </>
                    

                ) 
            
          })
        }
          
          </>

        }
        


        
      </div>
      

    </div>
  )
}

export default App