import React, {  useState,useCallback } from 'react'
import "./Gij.css"
import Gij1 from "../ShopItems/gij1.jpg"
import Gij2 from "../ShopItems/gij2.jpg"
import GijImage from "./GijImage"
import ImageViewer from "react-simple-image-viewer"



const Gij = () => {

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
      <h1>Genshin Impact Music Clear Acrylic Charm - JEAN</h1>
      {GijImage.map((src, index)=>(
        <img
          className='gij_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GijImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }

    </div>
  )
}

export default Gij
