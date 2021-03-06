import React, {useState, useCallback} from 'react'
import "./Ddhvs.css"
import DdhvsImage from "./DdhvsImage"
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


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
    <Footer/>
    </div>
  )
}

export default Ddhvs
