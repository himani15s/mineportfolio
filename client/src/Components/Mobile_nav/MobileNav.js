import React, { useState } from 'react';
import './MobileNav.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcContacts,
} from 'react-icons/fc';

const Mobile_nav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-header">
        <GiHamburgerMenu size={30} onClick={handleOpen} />
        <span className="mobile-nav-title">My Portfolio App</span>
      </div>
      {open && (
        <div className="mobile-nav-items">
          <div className="mobile-nav-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={closeMenu}>
              <FcHome />Home
            </Link>
          </div>
          <div className="mobile-nav-link">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={closeMenu}>
              <FcAbout />About
            </Link>
          </div>
          <div className="mobile-nav-link">
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={closeMenu}
            >
              <FcReadingEbook />Education
            </Link>
          </div>
          <div className="mobile-nav-link">
            <Link
              to="tech-stack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={closeMenu}
            >
              <FcBiotech />Tech Stack
            </Link>
          </div>
          <div className="mobile-nav-link">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={closeMenu}
            >
              <FcVideoProjector />Projects
            </Link>
          </div>
          <div className="mobile-nav-link">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={closeMenu}
            >
              <FcPortraitMode />Experience
            </Link>
          </div>
          <div className="mobile-nav-link">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={closeMenu}
            >
              <FcContacts />Contacts
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile_nav;
