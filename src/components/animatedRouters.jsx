import React from'react'
import AboutMe from "./aboutMe/aboutMe"
import Projects from "./projects/projects"
import { Routes,Route,useLocation} from 'react-router-dom'

function AnimatedRoutes (){
    const location = useLocation()
    return(
<Routes location={location} key={location.pathname}>
 <Route index  element={<AboutMe />} />
 <Route path='/aboutme'  element={<AboutMe />} />
 <Route path="/projects" element={<Projects />} />
</Routes>
    )

}
export default  AnimatedRoutes