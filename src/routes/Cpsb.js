import React,{useState, useCallback} from 'react'
import "./Cpsb.css"
import CpsbImage from './CpsbImage'
import ImageViewer from "react-simple-image-viewer"
import Footer from './Footer'


const Cpsb = () => {
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
      <h1>Candy Paw Subscriber Badges</h1>
      {CpsbImage.map((src, index)=>(
        <img
        className='cpsb_img'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={CpsbImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    <Footer/>
    </div>
  )
}

export default Cpsb
