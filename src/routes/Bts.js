import "./Bts.css"
import BtsImage from "./BtsImage"
import ImageViewer from "react-simple-image-viewer"
import { useCallback, useState } from "react"

const Bts = () => {
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
      <h1>BTS Permission To Dance Metallic Sticker</h1>
      {BtsImage.map((src, index)=>(
        <img
          className="bts_img"
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          />
      ))}
      {isViewerOpen&&(<ImageViewer
        src={BtsImage}
        currentIndex={currentImage}
        onClose={closeImageViewer}
      />)
      }
    </div>
  )
}

export default Bts
