import './App.css'
import {Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
const App :React.FC=()=>{
  return(
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
 
  </div>
  )
}


export default App
