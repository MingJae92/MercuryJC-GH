import React, {  useState,useCallback } from 'react'
import "./Gikam.css"
import ImageViewer from "react-simple-image-viewer"
import GikamImage from './GikamImage'
import Footer from './Footer'


const Gikam = () => {

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
      <h1>Genshin-Impact-Music-Clear-Acrylic-Charm-KAMISATO-AYAKA</h1>
      {GikamImage.map((src, index)=>(
        <img
          className='gikam_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={GikamImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Gikam
