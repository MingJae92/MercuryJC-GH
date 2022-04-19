import React from 'react'
import "./ContactMe.css"
import Kiana from "../ArtWork/Kiana.jpeg"
import Footer from './Footer'


const ContactMe = () => {
  return (
    <div class="container">
    <h1>Contact Me</h1>
    <p>Feel free to contact me about anything regarding my art work.</p>
      <div class="row">
        <div class="col">
        <img src={Kiana}/>
        </div>
        <div class="col">
          <form>
            <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name"></input>
            <label for="lname">Last Name</label>
              <input type="text" id="lname" name="firstname" placeholder="Your name"></input>
            <label for="lname">Email</label>
              <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail"/>
              <div class="form-group">
              <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"/>
              </div>
              <button type="button" class="btn btn-outline-dark">Submit</button>
            </form>
        </div>
      </div>
      <div className='footer-contact'>
        <Footer/>
      </div> 
</div>
  )
}

export default ContactMe


