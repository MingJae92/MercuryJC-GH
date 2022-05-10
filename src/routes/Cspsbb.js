import React, {useState, useCallback} from 'react'
import "./Cspsbb.css"
import CspsbbImage from './CspsbbImage'
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


const Cspsbb = () => {
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
      <h1>Cat Succulent Planter Subscriber Badges B</h1>
      {CspsbbImage.map((src, index)=>(
        <img
          className='cspsbb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={CspsbbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Cspsbb
