import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom' 
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Home/Contact/Contact.jsx'


const router= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
      path:"",
      element:<Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
  
  ]

  }


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
