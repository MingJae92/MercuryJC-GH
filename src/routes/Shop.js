import React from 'react'
import Footer from './Footer'
import ShopItems from './ShopItems'
import "./Shop.css"
import { Link} from "react-router-dom"

const Shop = () => {
  
  return (
    <div>
    <div>
        <h1>Shop-Etsy-Previews</h1>
        <p>These are just previews only of my merchandise.</p>
    </div>
        
      <div className='grid'>
          {ShopItems.map((Items, index)=>
          <div key={index}>
            <Link to={Items.path}><h6>{Items.name}</h6></Link> 
            
            
            <img className='shop-items'
                  src={Items.img}
                />
            
           
            
          </div>)}
      </div>
        
      <Footer/>
    </div>
  )
}

export default Shop



