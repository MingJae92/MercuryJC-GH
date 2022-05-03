import React, {useState, useCallback} from 'react'
import "./Ddhvs.css"
import Ddhvs1 from "../ShopItems/ddhvs1.jpg"
import Ddhvs2 from "../ShopItems/ddhvs2.jpg"
import DdhvsImage from "./DdhvsImage"
import ImageViewer from "react-simple-image-viewer"


const Ddhvs = () => {
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
      <h1>Drunk-Dazed Holographic Vinyl Sticker</h1>
      {DdhvsImage.map((src, index)=>(
        <img
          className='ddhvs_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={DdhvsImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }

    </div>
  )
}

export default Ddhvs
