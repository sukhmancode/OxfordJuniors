import './App.css'
import { Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Admission from './pages/Admission'
import Aboutus from './pages/Aboutus'
import GalleryMain from './pages/GalleryMain'
import { useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Event from './pages/Event'
import Teachers from './pages/Teachers'
import Admin from './pages/Admin'


const App :React.FC=()=>{
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return(
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/admission' element={<Admission/>}></Route>
      <Route path='/about' element={<Aboutus/>}></Route>
      <Route path='/gallery' element={<GalleryMain/>}></Route>
      <Route path='/events' element={<Event/>}></Route>
      <Route path='/teacher' element={<Teachers/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
 
  </div>
  )
}


export default App
