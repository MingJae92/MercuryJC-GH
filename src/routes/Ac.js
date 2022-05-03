import React, {  useState,useCallback } from 'react'
import "./Ac.css"
// import Ac1 from "../ShopItems/ac.jpg"
import AcImage from './AcImage'
import ImageViewer from "react-simple-image-viewer"

const Ac = () => {
  
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
      <h1>Animal Crossing ACNH Inspired Leaf Subscriber Badges Package</h1>
      {/* <img src={Ac1} onClick={openImageViewer}/> */}
      {AcImage.map((src, index)=>(
        <img className="ac_img"
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={AcImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    </div>
  )
}

export default Ac
