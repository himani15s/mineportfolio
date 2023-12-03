import React from 'react'
import './Home.css'
import { useTheme } from '../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from '../Assets/docs/resume.pdf';
import { BsFillSunFill, BsMoonStars } from 'react-icons/bs'
import Fade from 'react-reveal/Fade';
const Home = ({ toggle }) => {
  const [theme, setTheme] = useTheme();
  const HandleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' :
      'light'));

  };
  return (

    <>

      <div className={toggle ? "container-fluid home-container-toggle" : "container-fluid home-container"} id='home'>
      <div className="theme-btn" onClick={HandleTheme}>
          {theme === 'light' ? (<BsMoonStars />) : (<BsFillSunFill />)}

        </div>
        <Fade right></Fade>
        <div className={toggle ? "home-content-toggle" : "home-content"}>
          <Fade right><h2>Hi✌️ I'm a  </h2>

          <h1><Typewriter
            options={{
              strings: ['Full Stack Developer!', 'Mern Stack Developer!'],
              autoStart: true,
              loop: true,
            }}
          /></h1>
          </Fade>

          <Fade bottom>
            <div className="home-buttons">
              <a href="https://api.whatsapp.com/send/?phone=9571720633" className='btn btn-hire ' rel='noopener noreferrer'
              target='_blank' >Hire Me</a>
          
              <a className='btn btn-cv' href={Resume} download="himani_cv.pdf">Resume</a>
            </div>

          </Fade>


        </div>
      </div>
    </>
  )
}

export default Home;