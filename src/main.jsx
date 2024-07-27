import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux_store/store'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AboutMe from "./components/aboutMe/aboutMe"
import Projects from "./components/projects/projects"
import { AnimatePresence } from 'framer-motion'
import Err from"./components/Err/err"
const routeConfig=createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[{
    path:"/",
    element:<AboutMe />
  },{
    path:"/aboutme",
    element:<AboutMe />
  },
  {
    path:"/projects",
    element:<Projects />
  }
]
},
{
  path:"*",
  element:<Err />
},
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <Provider store={store}> 
      <AnimatePresence mode="wait">
         <RouterProvider router={routeConfig} />
         </AnimatePresence>

    </Provider>
  </React.StrictMode>,
)
