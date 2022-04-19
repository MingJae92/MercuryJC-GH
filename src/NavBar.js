import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter , Link,  } from 'react-router-dom';
import "./routes/NavBar.css";
import {slide as Menu} from "react-burger-menu";

const NavBar = () => {
  return (
    
    <div>
      <Menu>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/aboutme">About Me</Link>
              </li>
             
              <li>
                <Link to="/commission">Commissions</Link>
              </li>
              <li>
                <Link to="/mywork">My Work</Link>
              </li>
              <li>
                <Link to="/contactme">Contact Me</Link>
              </li>
            </ul>
            {/* <Routes>
              <Route>
                <Route path="/" element={<Homepage/>}></Route>
                <Route exact path="/mywork" element={<MyWork/>}></Route>
                <Route exact path="/shop" element={<Shop/>}></Route>
                <Route exact path="/commission" element={<Commissions/>}></Route>
                <Route exact path="/aboutme" element={<AboutMe/>}></Route>
                <Route exact path="/contactme" element={<ContactMe/>}></Route>
              </Route>
            </Routes> */}
          </nav>
        </BrowserRouter>
      </Menu>  
    </div>
  )
}

export default NavBar

