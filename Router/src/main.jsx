import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom' 
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Home/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { LoaderInfo } from './components/Github/Github.jsx'


// const router= createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children:[
//       {
//       path:"",
//       element:<Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
  
//   ]

//   }


// ])


const router=
createBrowserRouter(

  createRoutesFromElements(
   <Route path='/' element={<App/>}>
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='user/:userid' element={<User/>}/>
     <Route
      loader={LoaderInfo}
      path='github'
      element={<Github/>}/>

   </Route>
  )

)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
