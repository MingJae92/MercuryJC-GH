import React, {  useState,useCallback } from 'react'
import "./Gie.css"
import GieImage from "./GieImage"
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


const Gie = () => {

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
      <h1>Genshin Impact Music Clear Acrylic Charm - EULA</h1>
      {GieImage.map((src, index)=>(
        <img
          className='gie_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GieImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Gie
