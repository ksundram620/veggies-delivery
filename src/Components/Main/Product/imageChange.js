import React, { useEffect, useState } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages=[
   { url: "https://images.theconversation.com/files/232033/original/file-20180815-2906-h00fij.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop",
  
},
    {
        url:"https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg",
        
    },

   
    {
        url:"https://www.thespruceeats.com/thmb/6lfcov0DyrPVtE6zhX2law4RFA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freshvegetablesAlexRaths-4c1ea186a88e4fd7b95283eee614600c.jpg",
        
    },
    {
        url:"https://www.heart.org/-/media/AHA/H4GM/Article-Images/fruit-and-vegetables.jpg",
        
    },
    {
        url:"https://milehighspine.com/wp-content/uploads/How-Do-Fruits-and-Veggies-Help-Your-Health_resized.png",
      
    }
  ]
  let count=0;
export default function ImageChange() {
    
  return (
  <>
      <div  style={{width:"auto",height:600,color:"black",marginTop:100}}>
            
      <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container ade-in-image" >
              <img className="img1" width="100%" height="600px"   src={fadeImage.url} />
            </div>
          
          </div>
        ))}
      </Fade>
    </div>
            </div>
  </>
  )
}
