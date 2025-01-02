import React from 'react'
import Login from './Login-page'
import Browse from './Browse'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MoviesDetails from './MoviesDetails'



const Body = () => {

 


    const appRouter = createBrowserRouter([
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"/browse",
        element:<Browse/>
      },
      {
        path: "/movie/:id", 
        element: <MoviesDetails />
      }
      
    ])

   
    

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
