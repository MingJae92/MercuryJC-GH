import React, {  useState,useCallback } from 'react'
import "./Gikaz.css"
import GikazImage from './GikazImage'
import ImageViewer from "react-simple-image-viewer"


const Gikaz = () => {

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
      <h1>Genshin Impact Music Clear Acrylic Charm - KAZUHA</h1>
      {GikazImage.map((src, index)=>(
        <img
          className='gikaz_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GikazImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    </div>
  )
}

export default Gikaz
