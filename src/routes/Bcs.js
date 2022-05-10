import React ,{useState,useCallback } from 'react'
import "./Bcs.css"
import BcsImage from './BcsImage'
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


const Bcs = () => {
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
      <h1>Butter Cat Stickers</h1>
      {BcsImage.map((src, index)=>(
        <img
        className='bcs_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={BcsImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
      <Footer/>
    </div>
  )
}

export default Bcs
