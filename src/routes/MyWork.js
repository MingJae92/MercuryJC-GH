import React, { useState,useCallback } from 'react'
import "./MyWork.css";
import ImageViewer from "react-simple-image-viewer";
import Gallery from './Gallery';
import Footer from './Footer'
import ScrollToTop from './ScrollToTop';

// const imageNames=[
//   {"name":"Ayato"},
//   {"name":"Elementalist"},
//   {"name":"KCRekkles"},
//   {"name":"LanternRiteYaeMik"},
//   {"name":"MonarchMona"},
//   {"name":"Pardofelis"},
//   {"name":"PorcelainGanyu"},
//   {"name":"StarchasmHutao"},
//   {"name":"StargazerVienna"},
//   {"name":"YaeMiko"},
//   {"name":"YearOfTheTiger"}
// ]

const MyWork = () => {
  const [currentImage, setCurrentImage]=useState(0);
  const [isViewerOpen, setIsViewerOpen]= useState(false);
 
 
  const openImageViewer = useCallback((index) =>{
    setCurrentImage(index);
    setIsViewerOpen(true);
  },[]);
  
  const closeImageViewer = ()=>{
    setCurrentImage(0);
    setIsViewerOpen(false);
  }

  return (
    <div>
      <h1>My Art Work</h1>

      {Gallery.map((src, index)=>(
        <img className='gallery'
          src={src}
          onClick={()=>openImageViewer(index)}
          key={index}
          // name={imageNames.name}
          />
       
      ))}
      
      {isViewerOpen&&(
        <ImageViewer
          src={Gallery}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          closeOnClickOutside={true}
          />
      )}
     
    <ScrollToTop/>
    <Footer/>
    </div>
  )
}

export default MyWork
