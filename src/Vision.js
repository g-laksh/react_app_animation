import Lottie from 'react-lottie';
import animation from './animation.json';
import { useState } from "react";

export default function Vision(){
    const [state,setState] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
        return(

        <>
        <div className="container">
        <h1  >Vision</h1>
    <button onClick={()=>{
        setState(!state);

    }}
   
    >
    {state? "hide":"show"}
    </button>
  
    {state && <Lottie options={defaultOptions}
              height={400}
              width={400}
             />}
             </div>
   
    </>
    )
}