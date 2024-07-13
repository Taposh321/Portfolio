import React,{useState,useEffect} from "react"
import NavBar from "./components/aboutMe/NavBar"
import Hero from "./components/hero"
import AnimatedRoutes from "./components/animatedRouters"
import Loading from './components/loading';

function App(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate a data fetch
          setLoading(false);
      }, []);

    return(
        <>
        {
        loading ? (<Loading />) : (
            
              <Hero>
            <NavBar />
            <AnimatedRoutes />
            </Hero>
            )
          
        }
</>
    )
}
export default App