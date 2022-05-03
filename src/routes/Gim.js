import React, {  useState,useCallback } from 'react'
import "./Gim.css"
import ImageViewer from "react-simple-image-viewer"
import GimImage from './GimImages'


const Gim = () => {

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
      <h1>Genshin Impact Music Clear Acrylic Charm - MONA</h1>
      {GimImage.map((src, index)=>(
        <img
          className='gim_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GimImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }

    </div>
  )
}

export default Gim
