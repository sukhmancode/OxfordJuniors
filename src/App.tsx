import './App.css'
import {Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Admission from './pages/Admission'
import Aboutus from './pages/Aboutus'
import GalleryMain from './pages/GalleryMain'
const App :React.FC=()=>{
  return(
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/admission' element={<Admission/>}></Route>
      <Route path='/about' element={<Aboutus/>}></Route>
      <Route path='/gallery' element={<GalleryMain/>}></Route>
    </Routes>
 
  </div>
  )
}


export default App
