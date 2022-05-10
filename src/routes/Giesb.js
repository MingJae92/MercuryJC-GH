import React, {  useState,useCallback } from 'react'
import "./Giesb.css"
import ImageViewer from "react-simple-image-viewer"
import GiesbImage from './GiesbImage'
import Footer from './Footer'


const Giesb = () => {

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
      <h1>Genshin Impact Elemental Subscriber Badges</h1>
      {GiesbImage.map((src, index)=>(
        <img
          className='giesb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GiesbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Giesb
