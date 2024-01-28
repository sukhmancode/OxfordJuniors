import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Gallery from "./gallery-dropdown";
import {  useState } from 'react'
import "aos/dist/aos.css";
import { CgMenu } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
const Nav :React.FC=()=>{
    const [openMenu,setOpenMenu]=useState(false)
    const [open,setOpen]=useState(false);
    
    const setMobileview=()=>{
        setOpenMenu(!openMenu)
    }
    return( 
        <div className={openMenu ? "nav active":"nav"} >
            <div className="oxford-logo">
                <img src="https://www.edustoke.com/assets/uploads-new/oxford-juniors-1504671925-1.png"/>
            </div>
           <div className="nav-elements" >
                <Link to={'/'}>
                <span>Home</span>
                </Link>
                <Link to={'/about'}>
                <span>About Us</span>
                </Link>
                <div className="gallery-dropdown" onMouseEnter={()=>setOpen(true)}
                onMouseLeave={()=>setOpen(false)}>
                    <div className="gallery-dropdown-1">
                    {
                        open && (<Gallery/>)
                    }
                    </div>
                <span>Gallery</span><IoIosArrowDown/>
                </div>
                <Link to={'/admission'}>
                <span>Admission </span>
                </Link>
                <Link to={'/contact'}>
                <span>Contact Us</span>
                </Link>
                <div className="join-us-btn">
          <button>Enroll now</button>
      </div>
    </div>
 <div className='mobile-navbar-btn' onClick={setMobileview}>
            <CgMenu name="menu-outline" className="mobile-nav-icon"
            onClick={()=>setOpenMenu(true)}/>
            <RxCross1 name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={()=>setOpenMenu(false)}
            />
         </div>
    </div>
    )
}
export default Nav;