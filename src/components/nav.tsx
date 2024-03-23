import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Gallery from './gallery-dropdown';
import 'aos/dist/aos.css';
import { CgMenu } from 'react-icons/cg';
import { RxCross1 } from 'react-icons/rx';
import AboutUs from './about-drop';

const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAbout,setAboutOpen]=useState(false)

  const setMobileview = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={openMenu ? 'nav active' : 'nav'}>
      <Link to={'/'}>
        <div className="oxford-logo">
          <img src="https://www.edustoke.com/assets/uploads-new/oxford-juniors-1504671925-1.png" alt="Oxford Logo" />
        </div>
      </Link>
      <div className="nav-elements">
        <Link to={'/'}>
          <span>Home</span>
        </Link>
        <div
          className="gallery-dropdown"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
          onClick={()=>setAboutOpen(!open)}
        >
          <div className="gallery-dropdown-1">{openAbout && <AboutUs/>}</div>
          <span>
           About Us <IoIosArrowDown />
          </span>
        </div>
        <div
          className="gallery-dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={()=>setOpen(!open)}
        >
          <div className="gallery-dropdown-1">{open && <Gallery />}</div>
          <span>
            Gallery <IoIosArrowDown />
          </span>
        </div>
        <Link to={'/admission'}>
          <span>Admission</span>
        </Link>
        <Link to={'/contact'}>
          <span>Contact Us</span>
        </Link>
        <Link to={'/quiz'}>
          <span>Quiz</span>
        </Link>
        
        <Link to={'/admission'}>
          <div className="join-us-btn">
            <button>Enroll now</button>
          </div>
        </Link>
      </div>
      <div className="mobile-navbar-btn" onClick={setMobileview}>
        <CgMenu
          name="menu-outline"
          className="mobile-nav-icon"
          onClick={() => setOpenMenu(true)}
        />
        <RxCross1
          name="close-outline"
          className="close-outline mobile-nav-icon"
          onClick={() => setOpenMenu(false)}
        />
      </div>
    </div>
  );
};

export default Nav;
