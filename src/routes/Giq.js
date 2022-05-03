import React, {  useState,useCallback } from 'react'
import "./Giq.css"
import ImageViewer from "react-simple-image-viewer"
import GiqImage from "./GiqImage"

const Giq = () => {

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
      <h1>Genshin Impact Music Clear Acrylic Charm - QIQI</h1>
      {GiqImage.map((src, index)=>(
        <img
          className='giq_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GiqImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }

    </div>
  )
}

export default Giq
