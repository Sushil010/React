import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

const Github = () => {
    const data=useLoaderData()

//     const [datas, setdata] = useState([])

// useEffect(() => {
//   fetch("https://api.github.com/users/Sushil010")
//   .then(response=>response.json())
//   .then(
//     data=>{
//         setdata(data)
//     }
//   )
// }, [])


  return (
    <div>
        
        
        Github Followers: {data.followers}
        
        <img src={data.avatar_url} alt="Image" width={300}/>
        
    </div>
  )
}

export default Github

export const LoaderInfo=async () => {
    const dataValue= await fetch("https://api.github.com/users/Sushil010")
    return dataValue.json()
}