import React from 'react';
import "./Footer.css"
import{FaInstagram, FaTwitter, FaTwitch} from "react-icons/fa"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

const Footer =()=> {
  return (
    <div className='background'>
      <MDBFooter >
        <MDBContainer>
          <h1>Follow Us On:</h1>
          <section className='mb-4'>
            <a><FaInstagram size={"30px"}/></a>
            <a><FaTwitch size={"30px"}/></a>
            <a><FaTwitter size={"30px"}/></a>
          </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a href='#' color='black'>
            MercuryJC
          </a>
        </div>
      </MDBFooter>
    </div>
    
  );
}

export default Footer