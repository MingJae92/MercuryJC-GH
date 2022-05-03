import React, {  useState,useCallback } from 'react'
import "./Sbspb.css"
import SbsbImage from './SbsbImage'
import ImageViewer from "react-simple-image-viewer"


const Sbspb = () => {

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
      <h1>Sakura Blossom Stream Package B</h1>
      {SbsbImage.map((src, index)=>(
        <img
          className='sbspb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={SbsbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }

    </div>
  )
}

export default Sbspb
