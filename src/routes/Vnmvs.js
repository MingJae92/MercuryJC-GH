import React, {  useState,useCallback } from 'react'
import "./Vnmvs.css"
import VnmvsImage from './VnmvsImage'
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


const Vnmvs = () => {

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
      <h1>Vitasoy Neko Matte Vinyl Stickers</h1>
      {VnmvsImage.map((src, index)=>(
        <img
          className='vnmvs_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={VnmvsImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Vnmvs
