import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './routes/AboutMe';
import Commissions from './routes/Commissions';
import MyWork from './routes/MyWork';
import Shop from './routes/Shop';
import Homepage from './routes/Homepage';
import ContactMe from './routes/ContactMe';

const App=()=> {

  return (
    <div className="App">

    <NavBar pageWrapId={"page-wrap"}/>
      <div className='page-wrap'>
        <BrowserRouter>
          <nav>
            <Routes>
              <Route>
                <Route path="/" element={<Homepage/>}></Route>
                <Route exact path="/mywork" element={<MyWork/>}></Route>
                <Route exact path="/shop" element={<Shop/>}></Route>
                <Route exact path="/commission" element={<Commissions/>}></Route>
                <Route exact path="/aboutme" element={<AboutMe/>}></Route>
                <Route exact path="/contactme" element={<ContactMe/>}></Route>
              </Route>
            </Routes>
          </nav>
        </BrowserRouter>

      </div>
    
    </div>
  );
}

export default App;

