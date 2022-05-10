import React, {  useState,useCallback } from 'react'
import "./Giwp.css" 
import GiwpImage from "./GiwpImage"
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


const Giwp = () => {
  
  const [currentImage, setCurrentImage]=useState(0);
  const [isViewerOpen, setIsViewerOpen]=useState(false);

  const openImageViewer = useCallback((index)=>{
    setCurrentImage(index);
    setIsViewerOpen(true);
  },[]);

  const closeImageViewer=()=>{
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div>
      <h1>A5 Genshin Impact Weekly Planner</h1>
      {GiwpImage.map((src, index)=>(
        <img
          className='giwp_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GiwpImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Giwp
