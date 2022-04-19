import React from 'react'
import "./Homepage.css"
import Carousel from 'nuka-carousel'
import Ayato from "../ArtWork/Ayato.jpg"
import Elementalist from "../ArtWork/Elementalist.jpg"
import KCRekkles from "../ArtWork/KCRekkles.jpg"
import LanternRiteYaeMiko from "../ArtWork/LanternRiteYaeMiko.jpg"
import MonarchMona from "../ArtWork/MonarchMona.jpg"
import Pardofelis from "../ArtWork/Pardofelis.jpg"
import PorcelainGanyu from "../ArtWork/PorcelainGanyu.png"
import StarchasmHutao from "../ArtWork/StarchasmHutao.jpg"
import StargazerVienna from "../ArtWork/StargazerVienna.jpg"
import YaeMiko from "../ArtWork/YaeMiko.jpg"
import YearOfTheTiger from "../ArtWork/YearOfTheTiger.jpg"
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to MercuryJC</h1>
     <>
       <Carousel wrapAround={true}>
       
        <img src={Ayato} />
        <img src={Elementalist} />
        <img src={KCRekkles} />
        <img src={LanternRiteYaeMiko} />
        <img src={MonarchMona} />
        <img src={Pardofelis} />
        <img src={PorcelainGanyu} />
        <img src={StarchasmHutao} />
        <img src={StargazerVienna} />
        <img src={YaeMiko} />
        <img src={YearOfTheTiger} />
       </Carousel>
       <Footer/>
     </>
    </div>
  )
}

export default Homepage
