import React, {  useState,useCallback } from 'react'
import "./Jnsb.css"
import ImageViewer from "react-simple-image-viewer"
import JnsbImage from "./JnsbImage"
import Footer from './Footer'


const Jnsb = () => {

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
      <h1>Jelly Neko Subscriber Badges</h1>
      {JnsbImage.map((src, index)=>(
        <img
          className='jnsb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={JnsbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Jnsb
