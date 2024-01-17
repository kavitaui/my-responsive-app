import React, { useEffect, useState } from 'react'
import { banner } from "./Project-images";
import "./Navbar.css";
const AnimatedImage = () => {
    const [imageAnimation, setimageAnimation] = useState(false);
    const handleAnimation =()=>{
        setimageAnimation(!imageAnimation);
    }

    useEffect(() => {
        
        setimageAnimation(true)
        const timeoutId = setTimeout(() => {
            setimageAnimation(false);
          }, 1000);
          return () => clearTimeout(timeoutId);
    }, [imageAnimation,setimageAnimation])

         
        return (
          
     <>  <div container>
        <div className={`animated-image ${imageAnimation? "animate":""}`} onclick={handleAnimation}>
        <img src={banner} alt='' className='img-fluid w-60 float-start animated-image' />

</div>
     </div>
     </>
        )
  }

export default AnimatedImage
