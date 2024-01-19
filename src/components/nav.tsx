import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
const Nav :React.FC=()=>{
    return(
        <div className="nav">
            <div className="oxford-logo">
                <img src="https://www.edustoke.com/assets/uploads-new/oxford-juniors-1504671925-1.png"/>
            </div>
           <div className="nav-elements">
                <Link to={'/'}>
                <span>Home</span>
                </Link>
                <span>About Us</span>
                <div className="gallery-dropdown">
                <span>Gallery</span><IoIosArrowDown/>
                </div>
                <span>Games </span>
                <Link to={'/contact'}>
                <span>Contact Us</span>
                </Link>
           </div>

           <div className="join-us-btn">
            <button>Enroll now</button>
           </div>
        </div>
    )
}
export default Nav;