import React, {  useState,useCallback } from 'react'
import "./Upmsb.css"
import UpmsbImage from './UpmsbImage'
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'

const Upmsb = () => {

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
      <h1>Usagi Pastel Moon Subscriber Badges</h1>
      {UpmsbImage.map((src, index)=>(
        <img
          className='upmsb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={UpmsbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Upmsb
