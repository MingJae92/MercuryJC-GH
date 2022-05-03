import React, {  useState,useCallback } from 'react'
import "./Sbspa.css"
import ImageViewer from "react-simple-image-viewer"
import SbspaImage from './SpspaImage'

const Sbspa = () => {

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
      <h1>Sakura Blossom Stream Package A</h1>
      {SbspaImage.map((src, index)=>(
        <img
          className='sbspa_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={SbspaImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    </div>
  )
}

export default Sbspa
