import React, {  useState,useCallback } from 'react'
import "./Mahvs.css"
import MahvsImage from "./MahvsImage"
import ImageViewer from "react-simple-image-viewer"

const Mahvs = () => {

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
      <h1>Moonboat Adventure Holographic Vinyl Sticker</h1>
      {MahvsImage.map((src, index)=>(
        <img
          className='mahvs_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={MahvsImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    </div>
  )
}

export default Mahvs
