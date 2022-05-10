import React, {  useState,useCallback } from 'react'
import "./Gih.css"
import GihImage from './GihImage'
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


const Gih = () => {

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
      <h1>Genshin Impact Music Clear Acrylic Charm - HUTAO</h1>
      {GihImage.map((src, index)=>(
        <img
        className='gih_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GihImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Gih
