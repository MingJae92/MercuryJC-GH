import React, {  useState,useCallback } from 'react'
import "./Sssb.css"
import ImageViewer from "react-simple-image-viewer"
import SssbImage from './SssbImage'
import Footer from './Footer'


const Sssb = () => {

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
      <h1>Strawberry Shibe Subscriber Badges</h1>
      {SssbImage.map((src, index)=>(
        <img
          className='sssb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={SssbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
     
    <Footer/>
    </div>
  )
}

export default Sssb
