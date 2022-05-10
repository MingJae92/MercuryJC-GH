import React, {  useState,useCallback } from 'react'
import "./Mgsb.css"
import MgsbImage from './MgsbImage'
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


const Mgssb = () => {

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
      {MgsbImage.map((src, index)=>(
        <img
          className='mgsb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={MgsbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Mgssb
