import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser'
import {useDispatch} from "react-redux"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'
const Body = () => {
const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browser/>
    }
])

  return (
    <div>
    <RouterProvider router={appRoute} />
    </div>
  
  )
}

export default Body
