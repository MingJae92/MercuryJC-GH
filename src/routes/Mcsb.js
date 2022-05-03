import React, {  useState,useCallback } from 'react'
import "./Mcsb.css"
import ImageViewer from "react-simple-image-viewer"
import McsbImage from "./McsbImage"


const Mcsb = () => {

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
      <h1>Magic Girl Subscriber Badges </h1>
      {McsbImage.map((src, index)=>(
        <img
          className='mcsb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={McsbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    </div>
  )
}

export default Mcsb
