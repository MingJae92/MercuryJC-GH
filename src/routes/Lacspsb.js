import React, {  useState,useCallback } from 'react'
import "./Lacspsb.css"
import Lacspsb1 from "../ShopItems/lacspsb.jpg"
import Lacspsb1Image from './LacspsbImage'
import ImageViewer from "react-simple-image-viewer"


const Lacspsb = () => {

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
      <h1>LIMITED ADD-ON Cat Succulent Planter Subscriber Badge</h1>
      {Lacspsb1Image.map((src, index)=>(
        <img
          className='lacspsb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={Lacspsb1Image}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    </div>
  )
}

export default Lacspsb
