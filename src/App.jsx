
import React,{useState,useEffect} from "react"
import NavBar from "./components/aboutMe/NavBar"
import Hero from "./components/hero"
import AboutMe from "./components/aboutMe/aboutMe"
import Projects from "./components/projects/projects"
import Footer from './components/footer/footer'
// import AnimatedRoutes from "./components/animatedRouters"
import Loading from './components/loading';
import { AnimatePresence } from 'framer-motion'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'



// const routeConfig=createBrowserRouter([{
//     path:"/",
//     element:<AboutMe />,
//     index:true
// },{
//     path:"/aboutme",
//     element:<AboutMe />
// },{
//     path:"/projects",
//     element:<Projects />
// },
// {
//     path:"*",
//     element:<AboutMe />
// },
// ])

function App(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
          setLoading(false);
      }, []);
    return(
        <>
        {
        loading ? (<Loading />) : (
              <Hero>
            <Outlet />
            <Footer />

            </Hero>

            )
          
        }
</>
    )
}
export default App