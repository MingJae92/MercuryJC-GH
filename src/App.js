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
import Giwp from "./routes/Giwp"
import Ac from "./routes/Ac"
import Bts from "./routes/Bts"
import Bcs from './routes/Bcs';
import Cpsb from './routes/Cpsb';
import Cspsba from "./routes/Cspsba";
import Ddhvs from './routes/Ddhvs';
import Gicvs from './routes/Gicvs';
import Giesb from './routes/Giesb';
import Gic from './routes/Gic';
import Gie from './routes/Gie';
import Gig from './routes/Gig';
import Gih from './routes/Gih';
import Gij from './routes/Gij';
import Gikam from './routes/Gikam';
import Gikaz from './routes/Gikaz';
import Gim from './routes/Gim';
import Giq from './routes/Giq';
import Giy from './routes/Giy';
import Giz from './routes/Giz';
import Gik from './routes/Gik'
import Jnsb from './routes/Jnsb';
import Kda from './routes/Kda';
import Lacspsb from './routes/Lacspsb';
import Mgsb from './routes/Mgsb';
import Mcsb from './routes/Mcsb';
import Mahvs from './routes/Mahvs';
import Sbspa from './routes/Sbspa';
import Sbspb from './routes/Sbspb';
import Sbsb from './routes/Sbsb';
import Sssb from './routes/Sssb';
import Upmsb from './routes/Upmsb';
import Vnmvs from './routes/Vnmvs';
import Cspsbb from './routes/Cspsbb';

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
                <Route exact path='/A5-Genshin-Impact-Weekly-Planner' element={<Giwp/>}></Route>
                <Route exact path='/Animal-Crossing-ACNH-Inspired-Leaf-Subscriber-Badges-Package' element={<Ac/>}></Route>
                <Route exact path='/BTS-Permission-To-Dance-Metallic-Sticker' element={<Bts/>}></Route>
                <Route exact path='/Butter-Cat-Stickers' element={<Bcs/>}></Route>
                <Route exact path='/Candy-Paw-Subscriber-Badges' element={<Cpsb/>}></Route>
                <Route exact path='/Cat-Succulent-Planter-Subscriber-Badges-A' element={<Cspsba/>}></Route>
                <Route exact path='/Cat-Succulent-Planter-Subscriber-Badges-B' element={<Cspsbb/>}></Route>
                <Route exact path='/Drunk-Dazed-Holographic-Vinyl-Sticker' element={<Ddhvs/>}></Route>
                <Route exact path='/Genshin-Impact-Character-Vinyl-Stickers' element={<Gicvs/>}></Route>
                <Route exact path='/Genshin-Impact-Elemental-Subscriber-Badges' element={<Giesb/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-CHILDE-TARTAGLIA' element={<Gic/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-EULA' element={<Gie/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-GANYU' element={<Gig/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-HUTAO' element={<Gih/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-JEAN' element={<Gij/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-KAMISATO-AYAKA' element={<Gikam/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-KAZUHA' element={<Gikaz/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-KLEE' element={<Gik/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-MONA' element={<Gim/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-QIQI' element={<Giq/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-YOIMIYA' element={<Giy/>}></Route>
                <Route exact path='/Genshin-Impact-Music-Clear-Acrylic-Charm-ZHONGLI' element={<Giz/>}></Route>
                <Route exact path='/Jelly-Neko-Subscriber-Badges' element={<Jnsb/>}></Route>
                <Route exact path='/K/DA-Inspired-Stream' element={<Kda/>}></Route>
                <Route exact path='/LIMITED-ADD-ON-Cat-Succulent-Planter-Subscriber-Badge' element={<Lacspsb/>}></Route>
                <Route exact path='/Magic-Girl-Subscriber-Badges' element={<Mgsb/>}></Route>
                <Route exact path='/Milk-Carton-Subscriber-Badges' element={<Mcsb/>}></Route>
                <Route exact path='/Moonboat-Adventure-Holographic-Vinyl-Sticker' element={<Mahvs/>}></Route>
                <Route exact path='/Sakura-Blossom-Stream-Package-A' element={<Sbspa/>}></Route>
                <Route exact path='/Sakura-Blossom-Stream-Package-B' element={<Sbspb/>}></Route>
                <Route exact path='/Sakura-Blossom-Subscriber-Badges' element={<Sbsb/>}></Route>
                <Route exact path='/Strawberry-Shibe-Subscriber-Badges' element={<Sssb/>}></Route>
                <Route exact path='/Usagi-Pastel-Moon-Subscriber-Badges' element={<Upmsb/>}></Route>
                <Route exact path='/Vitasoy-Neko-Matte-Vinyl-Stickers' element={<Vnmvs/>}></Route> 
                
              </Route>
            </Routes>
          </nav>
        </BrowserRouter>

      </div>
    
    </div>
  );
}

export default App;

