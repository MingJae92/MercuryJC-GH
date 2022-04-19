import React from 'react'
import Footer from './Footer'
import ShopItems from './ShopItems'
import "./Shop.css"
import {BrowserRouter, Route, Router, Link} from "react-router-dom"

const Shop = () => {
  
  return (
    <div>
    <div>
        <h1>Shop-Etsy-Previews</h1>
        <p>These are just previews only of my merchandise.</p>
    </div>
        
      <div className='grid'>
          {ShopItems.map(ShopItems=>
          <div>
            <h6>{ShopItems.name}</h6>
            {/* <h6>{ShopItems.id}</h6> */}
            <Link to='/'>
            <img className='shop-items'
                  src={ShopItems.img}
                />
            </Link>
           
            
          </div>)}
      </div>
        
      <Footer/>
    </div>
  )
}

export default Shop

{/* {ShopItems.map((src, ShopItems)=>
        <img className='shop-items'
          src={src}
          
          
      />
      )} */}


