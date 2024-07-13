
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faLinkedin , faFacebook , faGithub} from '@fortawesome/free-brands-svg-icons';


 
function GetMeOn() { 
    const [active, setActive] = useState(false);
    const handler = () => {
        setActive(!active);
    }

    const icons = {
        Linkedin: faLinkedin,
        Facebook: faFacebook,
        Github: faGithub
    };

    const links = ["Linkedin", "Facebook", "Github"];
    return (
        <>
        <div className='getOnMe'>
            <div className="social  d-flex justify-content-center align-items-center" onClick={handler}>              
            <span >Get me on</span>
            </div>
            {links.map((item, i) => (
       <div key={i} style={{
        width:"80px",
        height:"30px",
        zIndex:-i,
        fontSize:"16px",
        left: active ? (i*70)+90+"px" : "0px",
        transitionDelay: active ? +i/10+"s" : (links.length)/10/(i+1)+"s",
        backgroundColor:"rgb("+(0*(i+1))+","+(102*(i+1))+","+(28*(i+1))+")",
    }} className={"social_links " + item}>
       <FontAwesomeIcon icon={ icons[item]}/>
    </div>
    
))}
</div>
        </>
    );
}

export default GetMeOn