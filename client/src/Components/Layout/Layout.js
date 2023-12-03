import React, { useState } from "react";
import Home from "../../Pages/Home";
import {AiOutlineDoubleRight}  from "react-icons/ai";
import {AiOutlineDoubleLeft}  from "react-icons/ai";
import './Layout.css';
import Menu from "../Menu/Menu";
import About from "../../Pages/About";
import Techstack from "../../Pages/Techstack";
import Project from "../../Pages/Project";
import Education from "../../Pages/Education";
import Experience from "../../Pages/Experience";
import Contact from "../../Pages/Contact";
import ScrollToTop from 'react-scroll-to-top'
import { useTheme } from "../../context/ThemeContext";
import Reveal from 'react-reveal/Reveal';
import MobileNav from "../Mobile_nav/MobileNav";
const Layout = () => {
    const [toggle,settoggle] =useState(false);
    const [theme]=useTheme();
    const ToggleHandle=()=>
    {
       settoggle(!toggle);
    }
  return (
    <>
<div id={theme}>
<MobileNav/>
   {/*  SideBar section*/}
   <div className="sidebar-section" >
        <div className={toggle?"sidebar sidebar-toggle":"sidebar"} >
      
          <div className="sidebar-toggle-icon" onClick={ToggleHandle} >
          
          <p>
            {
                toggle ? (<AiOutlineDoubleLeft/>) : (<AiOutlineDoubleRight/>)
            }
          </p>
          </div>
     
          <Menu toggle={toggle}/>
        </div>
        

        {/* Container  */}
<div className={toggle?"pages-toggle":"pages"}>
<Home  toggle={toggle}/>
<About toggle={toggle}/>
<Education />
<Techstack />

<Project toggle={toggle}/>
<Experience />
<Contact toggle={toggle}/>
<Reveal>
      <div className={toggle? "footer-toggle": "footer"} >
      <p>😍Made by himani &copy; at 2023</p>
      </div>
      </Reveal>

</div>



      </div>

 <ScrollToTop smooth
 color="#fff"
 style={{backgroundColor:"#252525"}}
 
  />
</div>
   
    </>
  );
};

export default Layout;
