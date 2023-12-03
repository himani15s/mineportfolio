import React from 'react'
import './Menu.css'
import ProfileImage from '../../Components/Image/profile_pic_portfolio.jpg'

import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcContacts } from 'react-icons/fc'
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (<>
        <Zoom><div className="navbar-profile-pic">
          <img src={ProfileImage} alt="profile-pic" />
        </div>
        </Zoom>
        <Fade left>

        <div className="nav-items">

          <div className="nav-link"><Link to='home'
            spy={true}
            smooth={true}
            offset={-100}
            duration={100} >

            <FcHome />Home</Link>
          </div>
          <div className="nav-link"><Link to='about'
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}>

            <FcAbout />About</Link></div>
          <div className="nav-link"><Link to='education' spy={true}
            smooth={true}
            offset={-100}
            duration={100}><FcReadingEbook />Education</Link></div>

          <div className="nav-link"><Link to='tech-stack' spy={true}
            smooth={true}
            offset={-100}
            duration={100}><FcBiotech />Tech Stack</Link></div>

          <div className="nav-link"><Link to='project' spy={true}
            smooth={true}
            offset={-100}
            duration={100}><FcVideoProjector />Projects</Link></div>
          <div className="nav-link"><Link to='experience' spy={true}
            smooth={true}
            offset={-100}
            duration={100}><FcPortraitMode />Experience</Link></div>
          <div className="nav-link"><Link 
             to='contact'
              spy={true} 
              smooth={true}
              offset={-100}
              duration={100} ><FcContacts />Contacts</Link></div>

        </div>
        </Fade>
      </>
      )

        :

        (
          <>
            <div className=" nav-items-toggle">

              <div className="nav-link"><Link to='home' spy={true}
                smooth={true}
                offset={-100}
                duration={100}><FcHome /></Link>
              </div>
              <div className="nav-link"  ><Link to='about' spy={true}
                smooth={true}
                offset={-100}
                duration={100}><FcAbout /></Link></div>
              <div className="nav-link"><Link to='education' spy={true}
                smooth={true}
                offset={-100}
                duration={100}><FcReadingEbook /></Link></div>

              <div className="nav-link"><Link to='tech-stack' spy={true}
                smooth={true}
                offset={-100}
                duration={100}><FcBiotech /></Link></div>

              <div className="nav-link"><Link to='project' spy={true}
                smooth={true}
                offset={-100}
                duration={100}><FcVideoProjector /></Link></div>
              <div className="nav-link"><Link to='experience' spy={true}
                smooth={true}
                offset={-100}
                duration={100}><FcPortraitMode /></Link></div>
              <div className='nav-link'><Link
              to='contact'
              spy={true} 
              smooth={true}
              offset={-100}
              duration={100}><FcContacts /></Link></div>

            </div>
            
          </>
        )

      }

    </>
  )
}

export default Menu;