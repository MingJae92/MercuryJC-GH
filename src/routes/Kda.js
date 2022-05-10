import React, {  useState,useCallback } from 'react'
import "./Kda.css"
import KdaImage from './KdaImage'
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'



const Kda = () => {

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
      <h1>K/DA Inspired Stream</h1>
      {KdaImage.map((src, index)=>(
        <img
          className='kda_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={KdaImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }

    <Footer/>
    </div>
  )
}

export default Kda
