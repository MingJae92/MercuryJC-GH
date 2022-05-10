import React, {  useState,useCallback } from 'react'
import "./Gicvs.css"
import ImageViewer from "react-simple-image-viewer"
import GicvsImage from './GicvsImage'
import Footer from './Footer'


const Gicvs = () => {

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
      <h1>Genshin Impact Character Vinyl Stickers</h1>
      {GicvsImage.map((src, index)=>(
        <img
          className='gicvs_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GicvsImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Gicvs
