import React, { useState, useCallback } from 'react';
import "./Cspsba.css"
import ImageViewer from "react-simple-image-viewer"
import CspsbaImage from "./CspsbaImage"

const Cspsba = () => {
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
      <h1>Cat Succulent Planter Subscriber Badges A</h1>
      {CspsbaImage.map((src, index)=>(
        <img
          className='cspsba_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={CspsbaImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
      
    </div>
  )
}

export default Cspsba
